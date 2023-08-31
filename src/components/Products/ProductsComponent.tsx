import React from 'react';

import {
  Container,
  Description,
  GroupDescription,
  Img,
  Price,
  ProductImage,
  Title,
} from './ProductStyles';
import ProductsComponentProps from './ProductsComponentType';
import ButtonComponent from '../Button/ButtonComponent';
import {ProductsView} from './ProductStyles';

function ProductsComponent(props: ProductsComponentProps): JSX.Element {
  const productItem = props.item;
  const btnType = props.btnType;
  const productUpdate = props.onUpdateCart;

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
        <GroupDescription>
          <Title>{productItem.title}</Title>
          <Description>{productItem.description}</Description>
          <Price>{productItem.price}</Price>

          <ButtonComponent
            product={productItem}
            title={productItem.title}
            btnType={btnType}
            onUpdateCart={() => productUpdate && productUpdate(productItem)}
          />
        </GroupDescription>
      </ProductsView>
    </Container>
  );
}

export default ProductsComponent;
