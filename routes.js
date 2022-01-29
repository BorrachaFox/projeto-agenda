const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');

// Home 
route.get('/', homeController.paginaInicial);
route.post('/', homeController.paginaPost)

module.exports = route;