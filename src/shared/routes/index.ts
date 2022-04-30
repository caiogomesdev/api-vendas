import 'reflect-metadata';
import { Router } from 'express';

const route = Router();
route.get('/', (_req, res) => {
  res.status(200).json({
    ola: 'seja bem vindo agora ',
  });
});

export default route;
