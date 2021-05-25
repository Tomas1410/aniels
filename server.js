express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path')


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// console.log(path.join(__dirname, 'static', 'przepisy'))
app.use('/img', express.static(path.join(__dirname, 'static', 'przepisy')))



const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})



const recipeRouter = require('./routes/recipe');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const detailsRouter = require('./routes/details');
const generatorRouter = require('./routes/generator');
const rankingRouter = require('./routes/ranking');
const ulubioneRouter = require('./routes/ulubione');



app.use('/recipes', recipeRouter);
app.use('/rejestracja', userRouter);
app.use('/Login', authRouter);
app.use('/details', detailsRouter);
app.use('/generator', generatorRouter);
app.use('/ranking', rankingRouter);
app.use('/ulubione', ulubioneRouter);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
