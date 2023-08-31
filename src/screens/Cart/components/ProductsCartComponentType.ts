import {IProducts} from '../../../interfaces/Products';
interface ProductsCartComponentProps {
  item: IProducts;
  onUpdateCart: (toUpdate:IProducts) => void;
}

export default ProductsCartComponentProps;
