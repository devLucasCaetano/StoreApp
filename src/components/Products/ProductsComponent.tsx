import React from 'react';

import {Image} from 'react-native';

import {
  AddButton,
  Container,
  Description,
  GroupDescription,
  Price,
  ProductImage,
  Title,
  ButtonText,
} from './ProductsStyles';
import ProductsComponentProps from './ProductsComponentType';

function ProductsComponent(props: ProductsComponentProps): JSX.Element {
  const productItem = props.item;

  return (
    <Container>
      {/* TODO image */}
      <ProductImage>
        <Image
          style={{
            width: '100%',
            height: 220,
            borderRadius: 15,
          }}
          source={{
            uri: productItem.image,
          }}
        />
      </ProductImage>
      <GroupDescription>
        <Title>{productItem.title}</Title>
        <Description>{productItem.description}</Description>
        <Price>{productItem.price}</Price>
        <AddButton onPress={() => {console.log('fui apertado')}}>
          <ButtonText>Adicionar</ButtonText>
        </AddButton>
      </GroupDescription>
    </Container>
  );
}

export default ProductsComponent;
