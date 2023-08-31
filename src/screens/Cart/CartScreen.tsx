import React, {useEffect} from 'react';
import ProductsCartComponent from './components/ProductsCart';
import {
  AmountContent,
  Container,
  ProductsContent,
  TotalAmount,
} from './CartStyles';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IProducts } from '../../interfaces/Products';

function CartScreen(): JSX.Element {
  const [cartProducts, setCartProducts] = React.useState<Array<IProducts>>([]);

  function sumTotalAmount(totalAmount: number, product: Array<IProducts>) {
    product.map(item => {
      totalAmount += Number(item.price);
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
              <ProductsCartComponent
                item={item}
                onUpdateCart={getCartProducts}
              />
            )}
            keyExtractor={item => item.id.toString()}
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
