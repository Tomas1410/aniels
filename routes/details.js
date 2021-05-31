const router = require('express').Router();
let Recipe = require('../models/recipe.model');
const auth = require('../middleware/auth')


router.get('/', (req, res) => {
    res.redirect('../');
})

router.get('/:przepisId', (req, res) => {

    Recipe.findById(req.params.przepisId)
        .then(recipe => res.json(recipe))
        .catch(err => res.status(404).json('Error during fetch: ' + err));
});

router.patch('/:przepisId/add-comment', auth, async (req, res) => {
    // Recipe.updateOne({},{$set: {}})
    let przepis = await Recipe.findById(req.params.przepisId).exec()
    if (!przepis) return res.status(404).send('Przepis nie istnieje')

    let query = { $push: { "komentarze": { "$position": 0 } } }
    for (let key in req.body) {
        if (przepis[key] && przepis[key] !== req.body[key])
            query.$push[key] = req.body[key];
    }
    const updatedRecipe = await Recipe.updateOne({ _id: req.params.przepisId }, query).exec()
    przepis = await Recipe.findById(req.params.przepisId).select('komentarze').exec();

    res.json(przepis);
});



module.exports = router