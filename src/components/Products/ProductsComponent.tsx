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

function ProductsComponent(props: ProductsComponentProps): JSX.Element {
  const productItem = props.item;
  const btnType = props.btnType;

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
            uri: productItem.image,
          }}
        />
      </ProductImage>
      <GroupDescription>
        <Title>{productItem.title}</Title>
        <Description>{productItem.description}</Description>
        <Price>{productItem.price}</Price>
        {/* <AddButton
          onPress={() => {
            console.log('fui apertado');
          }}>
          <ButtonText>Adicionar</ButtonText>
        </AddButton> */}
        <ButtonComponent title={productItem.title} btnType={btnType} />
      </GroupDescription>
    </Container>
  );
}

export default ProductsComponent;
