import React from 'react';

import {
  Container,
  ProductInfo,
  Img,
  Price,
  ProductImage,
  Title,
  ButtonArea,
} from './ProductsCartStyles';
import ProductsCartComponentProps from './ProductsCartType';
import ButtonComponent from '../../../components/Button/ButtonComponent';
import {ProductsView} from './ProductsCartStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IProducts } from '../../../interfaces/Products';

function ProductsCartComponent(props: ProductsCartComponentProps): JSX.Element {
  const productItem = props.item;

  async function handleRemoveProductFromCart() {
    try {
      const existingCart = await AsyncStorage.getItem('cart');
      const cart = existingCart ? JSON.parse(existingCart) : [];
      const productIndex = cart.findIndex(
        (item: IProducts) => item.id === productItem.id,
      );

      if (productIndex !== -1) {
        cart[productIndex].quantity -= 1;
        console.log('removendo ', cart[productIndex].product.title);
      } else {
        cart.push({product: productItem, quantity: 1});
        console.log('removendo ', productItem.title);
      }

      await AsyncStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.log('Erro ao remover produto', error);
    }
  }

  return (
    <Container>
      <ProductsView>
        <ProductImage>
          <Img
            source={{
              uri:
                productItem.image ||
                'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg',
            }}
          />
        </ProductImage>
        <ProductInfo>
          <Title>{productItem.title}</Title>
          <Price>{productItem.price}</Price>
          <ButtonArea>
            <ButtonComponent
              title=""
              btnType="remove"
              onPress={handleRemoveProductFromCart}
            />
          </ButtonArea>
        </ProductInfo>
      </ProductsView>
    </Container>
  );
}

export default ProductsCartComponent;
