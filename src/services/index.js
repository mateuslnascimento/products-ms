import productsService from './productsService.js';

export default (dependencies) => ({
  postProducts: productsService(dependencies).putProducts,
  getProducts: productsService(dependencies).getProducts,
  putProducts: productsService(dependencies).putProducts,
  patchProducts: productsService(dependencies).patchProducts,
  deleteProducts: productsService(dependencies).deleteProducts,
});
