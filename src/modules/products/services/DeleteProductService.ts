import ProductRepository from '../repositories/ProductsRepository';
import AppError from '@shared/errors/AppError';

class DeleteProductService {
  async execute(id: number): Promise<{ message: string }> {
    const product = await ProductRepository.findOne({ where: { id } });
    if (!product) throw new AppError('Product not found');
    const nameProduct = product.name;

    await ProductRepository.remove(product);
    return { message: `product ${nameProduct} was removed.` };
  }
}
export default DeleteProductService;
