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

function sumTotalAmount(totalAmount: number, product: Array<any>) {
  product.map(item => {
    totalAmount += Number(item.price);
  });
  return totalAmount.toFixed(2);
}

let totalAmount = 0;

function CartScreen(): JSX.Element {
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
      <ProductsContent>
        <GestureHandlerRootView>
          <FlatList
            data={productList}
            renderItem={renderProductItem}
            keyExtractor={item => item.id.toString()}
          />
        </GestureHandlerRootView>
      </ProductsContent>
      <AmountContent>
        <TotalAmount>
          Total: R${sumTotalAmount(totalAmount, productList) || '0,00'}
        </TotalAmount>
        {/* todo btn  */}
      </AmountContent>
    </Container>
  );
}

export default CartScreen;
