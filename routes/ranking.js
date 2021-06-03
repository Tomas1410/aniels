const router = require('express').Router();
let Recipe = require('../models/recipe.model');
const auth = require('../middleware/auth')



// router.get('/comments', (req, res) => {
//     //sort({ zlozonosc: -1 })
//     //sort({ "count": -1 })
//     //find({}).select('tytul zlozonosc')
//     Recipe.aggregate([{ $project: { count: { $size: "$komentarze" } } }])
//         .sort({ "count": -1 })
//         .then((document) => res.json(document))
//         .catch(err => res.status(400).json('Error: ' + err));

// });

// router.get('/ulubione', (req, res) => {
//     //sort({ zlozonosc: -1 })
//     //sort({ "count": -1 })
//     //find({}).select('tytul zlozonosc')
//     //.aggregate([{ $project: { count: { $size: "$ulubione" } }, komentarze: 1 }, { $unwind: $komentarze }])
//     Recipe.aggregate([{ $project: { count: { $size: "$ulubione" } } }])
//         .sort({ "count": -1 })
//         .then((document) => res.json(document))
//         .catch(err => res.status(400).json('Error: ' + err));

// });
module.exports = router;