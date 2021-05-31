const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const comments = new Schema({
  author: { type: String, required: true },
  treść: { type: String, required: true }
},
  {
    timestamps: true,
  })



const recipeSchema = new Schema({
  tytul: { type: String, required: true },
  krotki_opis: { type: String, required: true },
  skladniki: { type: String, required: true },
  sposob_wykonania: { type: String, required: true },
  komentarze: { type: [comments], required: false },
  img: { type: String, required: false },
  pora: { type: String, required: true },
  typ: { type: String, required: true },
  czas_wykonania: { type: String, required: true },
  zlozonosc: { type: String, required: true },
  ulubione: { type: Array, required: true }
}, {
  timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
