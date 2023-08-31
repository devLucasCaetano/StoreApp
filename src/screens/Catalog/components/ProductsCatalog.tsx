import React from 'react';

import {
  ButtonArea,
  Container,
  Description,
  Img,
  Price,
  ProductImage,
  ProductsInfo,
  Title,
} from './ProductsCatalogStyles';
import ProductsComponentProps from './ProductsCatalogType';
import ButtonComponent from '../../../components/Button/ButtonComponent';
import {ProductsView} from './ProductsCatalogStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IProducts } from '../../../interfaces/Products';

function ProductsCatalogComponent(props: ProductsComponentProps): JSX.Element {
  const productItem = props.item;

  async function handleAddProductToCart() {
    try {
      const existingCart = await AsyncStorage.getItem('cart');
      const cart = existingCart ? JSON.parse(existingCart) : [];
      const productIndex = cart.findIndex(
        (item: IProducts) => item.id === productItem.id,
      );

      if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
        console.log('adicionando ', cart[productIndex].product.title);
      } else {
        cart.push({product: productItem, quantity: 1});
        console.log('adicionando ', productItem.title);
      }

      await AsyncStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.log('Erro ao adicionar produto', error);
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
        <ProductsInfo>
          <Title>{productItem.title}</Title>
          <Description>{productItem.description}</Description>
          <Price>{productItem.price}</Price>
          <ButtonArea>
            <ButtonComponent
              title=""
              btnType="add"
              onPress={handleAddProductToCart}
            />
          </ButtonArea>
        </ProductsInfo>
      </ProductsView>
    </Container>
  );
}

export default ProductsCatalogComponent;
