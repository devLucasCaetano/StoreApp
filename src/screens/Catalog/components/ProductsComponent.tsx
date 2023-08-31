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
} from './ProductsStyles';
import ProductsComponentProps from './ProductsComponentType';
import ButtonComponent from '../../../components/Button/ButtonComponent';
import {ProductsView} from './ProductsStyles';

function ProductsComponent(props: ProductsComponentProps): JSX.Element {
  const productItem = props.item;
  // const productUpdate = props.onUpdateCart;

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
              product={productItem}
              title={productItem.title}
              btnType="add"
            />
          </ButtonArea>
        </ProductsInfo>
      </ProductsView>
    </Container>
  );
}

export default ProductsComponent;
