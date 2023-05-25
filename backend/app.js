const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');
const cors = require('./middleware/cors');

const app = express();

mongoose.connect('mongodb+srv://DevBack:qnRslP7UCKdZCSrp@projet7.dgzqwll.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use(cors);

app.use('/api/books', bookRoutes);
app.use('/api/auth', userRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;