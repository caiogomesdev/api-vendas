import ProductRepository from '../repositories/ProductsRepository';
import Product from '../entities/Product';

class ListProductService {
  async execute(): Promise<Product[]> {
    return ProductRepository.find();
  }
}
export default ListProductService;
