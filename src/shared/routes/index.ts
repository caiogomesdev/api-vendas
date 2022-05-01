import 'reflect-metadata';
import { Router } from 'express';
import ProductRouters from '@modules/products/routes/products.routes';

const route = Router();
route.get('/', (_req, res) => {
  res.status(200).json({
    ola: 'seja bem vindo agora ',
  });
});

route.use('/product', ProductRouters);

export default route;
