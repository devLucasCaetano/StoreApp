import React from 'react';

import {
  Container,
  ProductInfo,
  Img,
  Price,
  ProductImage,
  Title,
  ButtonView,
} from './ProductsCartStyles';
import ProductsCartComponentProps from './ProductsCartComponentType';
import ButtonComponent from '../../../components/Button/ButtonComponent';
import {ProductsView} from './ProductsCartStyles';

function ProductsCartComponent(props: ProductsCartComponentProps): JSX.Element {
  const productItem = props.item;
  // const btnType = props.btnType;
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
        <ProductInfo>
          <Title>{productItem.title}</Title>
          <Price>{productItem.price}</Price>
          <ButtonView>
            <ButtonComponent
              product={productItem}
              title={productItem.title}
              btnType="remove"
              onUpdateCart={() => productUpdate && productUpdate(productItem)}
            />
          </ButtonView>
        </ProductInfo>
      </ProductsView>
    </Container>
  );
}

export default ProductsCartComponent;
