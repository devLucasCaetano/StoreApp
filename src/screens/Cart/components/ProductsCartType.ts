import { ICart } from '../../../interfaces/Cart';
import {IProducts} from '../../../interfaces/Products';
interface ProductsCartComponentProps {
  products: IProducts;
  quantity: ICart['quantity'];
  onProductChange: (item: IProducts) => void;
}

export default ProductsCartComponentProps;
