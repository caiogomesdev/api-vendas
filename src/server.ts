import express, { Request, Response } from 'express';
import cors from 'cors';
import route from '@shared/routes';
import AppError from '@shared/errors/AppError';
import { AppDataSource } from '@config/typeorm.config';

const app = express();

AppDataSource.initialize()
  .then(() => {
    console.log('Connectado ao banco de dados');
  })
  .catch(e => console.log(e));

app.use(cors());
app.use(express.json());

app.use(route);

app.use((error: Error, _req: Request, res: Response) => {
  if (error instanceof AppError) {
    return res
      .status(error.statusCode)
      .json({ status: error.statusCode, message: error.message });
  }
  return res.status(500).json({
    status: 'error',
    message: 'internal server error',
  });
});

const PORT = 3333;
app.listen(PORT, () => console.log('Server rodando na porta', PORT));
