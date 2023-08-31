import React from 'react';
import {Image} from 'react-native';

import {
  Container,
  Description,
  GroupDescription,
  Price,
  ProductImage,
  Title,
} from './ProductsStyles';
import ProductsComponentProps from './ProductsComponentType';
import ButtonComponent from '../Button/ButtonComponent';

function ProductsComponent(
  props: ProductsComponentProps & {onUpdateCart: () => void},
): JSX.Element {
  const productItem = props.item;
  // console.log('productItem', productItem);
  const btnType = props.btnType;
  // console.log('productItem', productItem.image);
  return (
    <Container>
      <ProductImage>
        <Image
          style={{
            width: '100%',
            height: 220,
            borderRadius: 15,
          }}
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
          onUpdateCart={props.onUpdateCart}
        />
      </GroupDescription>
    </Container>
  );
}

export default ProductsComponent;
