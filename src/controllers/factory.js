import productsController from './productsController.js';

export default (dependencies) => ({
  postProducts: productsController(dependencies).putProducts,
  getProducts: productsController(dependencies).getProducts,
  putProducts: productsController(dependencies).putProducts,
  patchProducts: productsController(dependencies).patchProducts,
  deleteProducts: productsController(dependencies).deleteProducts,
});
