import React from 'react';

import {
  Container,
  Description,
  GroupDescription,
  Price,
  ProductImage,
  Title,
} from './ProductsStyles';

interface ProductsInterface {
  name: string;
  price: string;
  description: string;
}

function ProductsComponent({
  name,
  price,
  description,
}: ProductsInterface): JSX.Element {
  return (
    <Container>
      {/* TODO image */}
      <ProductImage>
        <Title>{name}</Title>
      </ProductImage>
      <GroupDescription>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Price>{price}</Price>
      </GroupDescription>
        {/* TODO BUTTON ADD TO CART */}
    </Container>
  );
}

export default ProductsComponent;
