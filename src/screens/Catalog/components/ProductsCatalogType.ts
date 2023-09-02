import {IProducts} from '../../../interfaces/Products';
interface ProductsComponentProps {
  item: IProducts;
  onProductChange?: (item: IProducts) => void;
}

export default ProductsComponentProps;
