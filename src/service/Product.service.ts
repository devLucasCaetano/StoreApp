import { AxiosPromise } from 'axios';
import { api } from './api';
import { IProducts } from '../interfaces/Products';

function getProducts(): AxiosPromise<Array<IProducts>> {
  return api.get('/products');
}

export const ProductService = {
  getProducts,
};
