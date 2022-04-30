import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '@shared/entity/User'; //criar entidade

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'root',
  database: process.env.DB_DATABASE || 'api_vendas',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
