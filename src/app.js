import express from 'express';
import routers from './routers/index.js';
import controllers from './controllers/index.js';

const app = express();

const routes = routers(express.Router(), controllers);

app.use('/products', routes);

export default app;
