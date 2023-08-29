import React from 'react';
import {Container} from './CatalogStyles';
import ProductsComponent from '../../components/Products/ProductsComponent';
import {FlatList, GestureHandlerRootView} from 'react-native-gesture-handler';

const productList = [
  {
    id: 1,
    name: 'Camiseta',
    price: '100',
    description: 'Product 1 description',
  },
  {
    id: 2,
    name: 'Tênis',
    price: '200',
    description: 'Product 2 description',
  },
  {
    id: 3,
    name: 'Fone',
    price: '300',
    description: 'Product 3 description',
  },
];

function CatalogScreen(): JSX.Element {
  const renderProductItem = ({
    item,
  }: {
    item: {name: string; price: string; description: string};
  }) => (
    <ProductsComponent
      name={item.name}
      price={item.price}
      description={item.description}
    />
  );

  return (
    <Container>
      <GestureHandlerRootView>
        <FlatList
          data={productList}
          renderItem={renderProductItem}
          keyExtractor={item => item.id.toString()}
        />
      </GestureHandlerRootView>
    </Container>
  );
}

export default CatalogScreen;
