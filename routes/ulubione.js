const router = require('express').Router();
let Recipe = require('../models/recipe.model');
let User = require('../models/user.model');
const auth = require('../middleware/auth')



router.post('/', (req, res) => {
    Recipe.find({ ulubione: req.body.ulubione }).select('tytul img krotki_opis _id')
        .then((document) => res.json(document).status(200))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.patch('/dodaj-ulubiony/:przepisId', auth, (req, res) => {

    let id = req.params.przepisId
    let user = req.body.name

    Recipe.updateOne({ _id: id }, { $push: { "ulubione": user } }).exec().then(x => res.status(200).json({ 'message': 'Added as favourite' }))

})

router.patch('/usun-ulubiony/:przepisId', auth, (req, res) => {
    let id = req.params.przepisId
    let user = req.body.name

    Recipe.updateOne({ _id: id }, { $pull: { "ulubione": user } }).exec().then(x => res.status(200).json({ 'message': 'Deleted from favourite' }))

})


module.exports = router;