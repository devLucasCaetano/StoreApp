import React from 'react';
import ProductsComponent from '../../components/Products/ProductsComponent';
import {
  AmountContent,
  Container,
  ProductsContent,
  TotalAmount,
} from './CartStyles';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {FlatList} from 'react-native';
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

function sumTotalAmount(totalAmount: number, product: Array<any>) {
  product.map(item => {
    totalAmount += Number(item.price);
  });
  return totalAmount.toFixed(2);
}

let totalAmount = 0;

function CartScreen(): JSX.Element {
  return (
    <Container>
      <ProductsContent>
        <GestureHandlerRootView>
          <FlatList
            data={productList}
            renderItem={({item}) => <ProductsComponent item={item} btnType='remove' />}
            keyExtractor={item => item.id.toString()}
          />
        </GestureHandlerRootView>
      </ProductsContent>
      <AmountContent>
        <TotalAmount>
          Total: R${sumTotalAmount(totalAmount, productList) || '0,00'}
        </TotalAmount>
        {/* todo btn comprar */}
      </AmountContent>
    </Container>
  );
}

export default CartScreen;
