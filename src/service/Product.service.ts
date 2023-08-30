import { AxiosPromise } from 'axios';
import { api } from './api';

function getProducts(): AxiosPromise<any> {
  return api.get('/products');
}

export const ProductService = {
  getProducts,
};
