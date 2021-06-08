const router = require('express').Router();
let Recipe = require('../models/recipe.model');
const auth = require('../middleware/auth')



router.post('/', (req, res) => {

    let czas = req.body.czas ? req.body.czas.replace(' min', '') : ''
    let pora = req.body.pora;
    let typ = req.body.typ;



    var filter = {};
    if (czas === 'Dowolne') {
        czas = undefined
    }
    if (pora === 'Dowolne') {
        pora = undefined
    }
    if (typ === 'Dowolne') {
        typ = undefined
    }
    if (czas) {
        filter.czas_wykonania = czas;
    }
    if (pora) {
        filter.pora = pora;
    }
    if (typ) {
        filter.typ = typ;
    }

    console.log('filter:', filter)


    var query = { ...filter }
    Recipe.find(query).select('tytul krotki_opis pora typ czas img')
        .then((document) => res.json(document))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;