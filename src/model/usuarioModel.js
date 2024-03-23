// models/usuarioModel.js

const mongoose = require('../libs/db');

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  // Otros campos...
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
