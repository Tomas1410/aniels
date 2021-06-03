const router = require('express').Router();
let Recipe = require('../models/recipe.model');
const auth = require('../middleware/auth')



router.post('/', (req, res) => {

    let czas = req.body.czas.replace(' min', '')

    Recipe.find({ pora: req.body.pora, typ: req.body.typ, czas_wykonania: czas }).select('tytul krotki_opis pora typ czas img')
        .then((document) => res.json(document))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;