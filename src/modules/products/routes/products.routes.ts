import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productRouter = Router();
const productsController = new ProductsController();

productRouter.get('/', productsController.index);
productRouter.get('/:id', productsController.show);
productRouter.post('/', productsController.create);
productRouter.put('/', productsController.update);
productRouter.delete('/:id', productsController.destroy);

export default productRouter;
