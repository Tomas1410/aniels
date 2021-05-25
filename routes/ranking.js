const router = require('express').Router();
let Recipe = require('../models/recipe.model');
const auth = require('../middleware/auth')



router.get('/', (req, res) => {

    Recipe.find({}).select('tytul zlozonosc').sort({ zlozonosc: -1 })
        .then((document) => res.json(document))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;