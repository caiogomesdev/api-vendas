import { Request, Response } from 'express';
import CreateProductService from '../services/CreateProductService';
import DeleteProductService from '../services/DeleteProductService';
import ListProductService from '../services/ListProductService';
import ShowProductService from '../services/ShowProductService';
import UpdateProductService from '../services/UpdateProductService';

export default class ProductsController {
  async index(_req: Request, res: Response) {
    const listProduct = new ListProductService();
    const product = await listProduct.execute();
    return res.status(200).json(product);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const showProduct = new ShowProductService();
    const product = await showProduct.execute(Number(id));
    return res.status(200).json(product);
  }

  async create(req: Request, res: Response) {
    const { name, price, quantity } = req.body;

    const createProduct = new CreateProductService();
    const product = await createProduct.execute({ name, price, quantity });

    return res.status(201).json(product);
  }

  async update(req: Request, res: Response) {
    const { name, price, quantity } = req.body;
    const { id } = req.params;
    const updatedProduct = new UpdateProductService();
    const product = await updatedProduct.execute(Number(id), {
      name,
      price,
      quantity,
    });

    return res.status(200).json(product);
  }

  async destroy(req: Request, res: Response) {
    const { id } = req.params;
    const deletedProduct = new DeleteProductService();
    const message = await deletedProduct.execute(Number(id));
    return res.status(200).json(message);
  }
}
