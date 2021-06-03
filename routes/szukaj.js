const router = require('express').Router();
let Recipe = require('../models/recipe.model');


router.post('/', (req, res) => {
    let recipePattern = new RegExp("^" + req.body.query)

    // console.log(req.body.query)
    Recipe.find({ tytul: { $regex: recipePattern } })
        .select("tytul _id")
        .then(recipe => {
            res.json(recipe)
        }).catch(err => {
            console.log(err)
        })

})

module.exports = router;