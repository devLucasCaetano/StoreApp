import React from 'react';

import {
  Container,
  ProductInfo,
  Img,
  Price,
  ProductImage,
  Title,
  ButtonArea,
  Quantity,
  TitleQuantity,
} from './ProductsCartStyles';
import ProductsCartComponentProps from './ProductsCartType';
import ButtonComponent from '../../../components/Button/ButtonComponent';
import {ProductsView} from './ProductsCartStyles';

function ProductsCartComponent(props: ProductsCartComponentProps): JSX.Element {
  const productItem = props.products;
  const productQuantity = props.quantity;

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
          <TitleQuantity>
            <Title>{productItem.title}</Title>
            <Quantity>Quantidade: {productQuantity}</Quantity>
          </TitleQuantity>

          <Price>{productItem.price}</Price>

          <ButtonArea>
            <ButtonComponent
              title=""
              btnType="remove"
              onPress={() => {
                if (props.onProductChange) {
                  props.onProductChange(productItem);
                }
              }}
            />
          </ButtonArea>
        </ProductInfo>
      </ProductsView>
    </Container>
  );
}

export default ProductsCartComponent;
