import ProductRepository from '../repositories/ProductsRepository';
import Product from '../entities/Product';
import AppError from '@shared/errors/AppError';
interface IRequest {
  name: string;
  price: number;
  quantity: number;
}
class CreateProductService {
  async execute({ name, price, quantity }: IRequest): Promise<Product> {
    const productExists = await ProductRepository.findByName(name);

    if (productExists)
      throw new AppError('There is already one product with this name');

    const product = ProductRepository.create({
      name,
      price,
      quantity,
    });
    await ProductRepository.save(product);

    return product;
  }
}

export default CreateProductService;
