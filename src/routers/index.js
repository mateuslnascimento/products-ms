export default (router, controllers) => {
  const { getProducts, postProducts } = controllers;

  router.get('/', getProducts);

  router.post('/', postProducts);

  return router;
};
