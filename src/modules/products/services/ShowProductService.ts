import ProductRepository from '../repositories/ProductsRepository';
import Product from '../entities/Product';
import AppError from '@shared/errors/AppError';

class ShowProductService {
  async execute(id: number): Promise<Product> {
    const product = await ProductRepository.findOne({ where: { id } });
    if (!product) throw new AppError('Product not found');
    return product;
  }
}
export default ShowProductService;
