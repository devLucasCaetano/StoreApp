import {IProducts} from '../../interfaces/Products';
interface ProductsComponentProps {
  item: IProducts;
  btnType: 'add' | 'remove';
  onUpdateCart?: (toUpdate:IProducts) => void;
}

export default ProductsComponentProps;
