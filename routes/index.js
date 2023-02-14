const productsRouter = require('./productsRouter.js');
const peopleRouter = require('./peopleRouter.js');

function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/people', peopleRouter);
}

module.exports = routerApi;
