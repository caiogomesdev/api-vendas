import { AppDataSource } from '@config/typeorm.config';
import Product from '../entities/Product';

export const ProductRepository = AppDataSource.getRepository(Product).extend({
  findByName(name: string): Promise<Product | null> {
    return this.findOne({ where: { name } });
  },
});
