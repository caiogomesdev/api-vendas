import ProductRepository from '../repositories/ProductsRepository';
import Product from '../entities/Product';
import AppError from '@shared/errors/AppError';
interface IRequest {
  name: string;
  price: number;
  quantity: number;
}
class UpdateProductService {
  async execute(
    id: number,
    { name, price, quantity }: IRequest,
  ): Promise<Product> {
    let product = await ProductRepository.findOne({ where: { id } });

    if (!product) throw new AppError('Product not found');

    const productExists = await ProductRepository.findByName(name);

    if (productExists && id !== productExists.id)
      throw new AppError('There is already one product with this name');

    product = { ...product, name, price, quantity };

    await ProductRepository.save(product);

    return product;
  }
}

export default UpdateProductService;
