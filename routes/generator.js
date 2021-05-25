const router = require('express').Router();
let Recipe = require('../models/recipe.model');
const auth = require('../middleware/auth')



router.post('/', (req, res) => {

    console.log(req.body)

    const title = req.body.tytul;
    const pora = req.body.pora;
    const typ = req.body.typ;
    const czas = req.body.czas;
    const zlozonosc = req.body.zlozonosc;


    Recipe.find({ pora: req.body.pora, typ: req.body.typ, czas_wykonania: req.body.czas, zlozonosc: req.body.zlozonosc })
        .then((document) => res.json(document))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;