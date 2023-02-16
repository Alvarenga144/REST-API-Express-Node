const express = require('express');
const productsRouter = require('./productsRouter.js');
const peopleRouter = require('./peopleRouter.js');

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/people', peopleRouter);
}

module.exports = routerApi;
