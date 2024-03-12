// src/app.js
const express = require('express');
const apiRoutes = require('./routes/api');

const app = express();
app.use(express.json()); // Pour traiter les données JSON dans le corps de la requête
app.use(express.static('public')); // Pour servir les fichiers statiques
app.use('/api', apiRoutes); // Utilisation des routes définies dans api.js

module.exports = app;
