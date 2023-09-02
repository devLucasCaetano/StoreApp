import {IProducts} from '../../../interfaces/Products';
interface ProductsCartComponentProps {
  item: IProducts;
  onProductChange: (item: IProducts) => void;
}

export default ProductsCartComponentProps;
