export default (express, controllers) => {
  const { getProducts, postProducts } = controllers;

  const router = express.Router();

  router.get('/', getProducts);

  router.post('/', postProducts);
};
