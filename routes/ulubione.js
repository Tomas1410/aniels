const router = require('express').Router();
let Recipe = require('../models/recipe.model');
const auth = require('../middleware/auth')



router.post('/', (req, res) => {

    Recipe.find({ ulubione: req.body.ulubione })
        .then((document) => res.json(document))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;