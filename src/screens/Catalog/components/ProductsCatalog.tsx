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

function ProductsCatalogComponent(props: ProductsComponentProps): JSX.Element {
  const productItem = props.item;

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
              onPress={() => {
                if (props.onProductChange) { props.onProductChange(productItem); }
              }}
            />
          </ButtonArea>
        </ProductsInfo>
      </ProductsView>
    </Container>
  );
}

export default ProductsCatalogComponent;
