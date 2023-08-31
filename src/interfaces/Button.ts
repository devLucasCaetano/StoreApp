import { IProducts } from './Products';

export interface IButton {
  title: string;
  btnType: 'add' | 'remove';
  product: IProducts;
  onUpdateCart?: () => void;
}
