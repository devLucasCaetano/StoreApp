import React, {useEffect} from 'react';
import ProductsComponent from './components/ProductsCartComponent';
import {
  AmountContent,
  Container,
  ProductsContent,
  TotalAmount,
} from './CartStyles';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CartScreen(): JSX.Element {
  const [cartProducts, setCartProducts] = React.useState<Array<any>>([]);

  function sumTotalAmount(totalAmount: number, product: Array<any>) {
    product.map(item => {
      totalAmount += Number(item.product.price);
    });
    return totalAmount.toFixed(2);
  }
  let totalAmount = 0;

  async function getCartProducts() {
    try {
      const unWrapped = await AsyncStorage.getItem('cart');
      const wrappedProducts = unWrapped ? JSON.parse(unWrapped) : [];
      setCartProducts(wrappedProducts);
    } catch (error) {
      console.log('Erro ao buscar produtos do carrinho CartScreen', error);
    }
  }

  useEffect(() => {
    getCartProducts();
  }, []);

  return (
    <Container>
      <ProductsContent>
        <GestureHandlerRootView>
          <FlatList
            data={cartProducts}
            renderItem={({item}) => (
              <ProductsComponent
                item={item.product}
                onUpdateCart={getCartProducts}
              />
            )}
            keyExtractor={item => item.product.id.toString()}
          />
        </GestureHandlerRootView>
      </ProductsContent>
      <AmountContent>
        <TotalAmount>
          Total: R$
          {sumTotalAmount(totalAmount, cartProducts) || '0,00'}
        </TotalAmount>
        {/* todo btn comprar */}
      </AmountContent>
    </Container>
  );
}

export default CartScreen;
