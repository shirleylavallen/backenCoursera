// libs/db.js

const mongoose = require('mongoose');

// Conexión a la base de datos MongoDB en localhost
mongoose.connect('mongodb://127.0.0.1:27017/crud-example', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión a MongoDB establecida'))
  .catch(err => console.error('Error al conectar con MongoDB:', err));

module.exports = mongoose;
