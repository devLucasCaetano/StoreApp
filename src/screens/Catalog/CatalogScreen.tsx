import React from 'react';
import {Container} from './CatalogStyles';
import ProductsComponent from '../../components/Products/ProductsComponent';
import {FlatList, GestureHandlerRootView} from 'react-native-gesture-handler';
import {IProducts} from '../../interfaces/Products';

const productList: Array<IProducts> = [
  {
    id: 1,
    title: 'Sapato',
    price: '99.90',
    category: 'calçados',
    description: 'bom demaizi',
    image:
      'https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024',
  },
  {
    id: 2,
    title: 'Tênis',
    price: '20.95',
    category: 'calçados',
    description: 'bom demaizi',
    image:
      'https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024',
  },
  {
    id: 3,
    title: 'Teclado',
    price: '499.90',
    category: 'informática',
    description: 'bom demaizi',
    image:
      'https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024',
  },
];

function CatalogScreen(): JSX.Element {
  return (
    <Container>
      <GestureHandlerRootView>
        <FlatList
          data={productList}
          renderItem={({item}) => <ProductsComponent item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </GestureHandlerRootView>
    </Container>
  );
}

export default CatalogScreen;
