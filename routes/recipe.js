const router = require('express').Router();
let Recipe = require('../models/recipe.model');
const auth = require('../middleware/auth')
const multer = require('multer')

const storageImg = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './client/public/assets')
  },
  filename: (req, file, cb) => {

    cb(null, Date.now() + "--" + file.originalname);
  }
})
const upload = multer({ storage: storageImg }); // or simply { dest: 'uploads/' }


router.get('/', (req, res) => {
  Recipe.find()
    .then(recipe => res.json(recipe))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', [auth, upload.single('img')], (req, res) => {

  console.log("request-File:", req.file)

  const tytul = req.body.tytul;
  const krotki_opis = req.body.krotki_opis;
  const skladniki = req.body.skladniki;
  const sposob_wykonania = req.body.sposob_wykonania;
  const img = req.file.filename;
  const pora = req.body.pora;
  const typ = req.body.typ;
  const czas_wykonania = req.body.czas_wykonania;
  const zlozonosc = req.body.zlozonosc;


  const newRecipe = new Recipe({
    tytul,
    krotki_opis,
    skladniki,
    sposob_wykonania,
    img,
    pora,
    typ,
    czas_wykonania,
    zlozonosc
  });

  newRecipe.save()
    .then((document) => res.json(document))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;