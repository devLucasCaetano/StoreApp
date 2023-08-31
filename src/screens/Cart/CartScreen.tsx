import React, {useEffect} from 'react';
import ProductsComponent from '../../components/Products/ProductsComponent';
import {
  AmountContent,
  Container,
  ProductsContent,
  TotalAmount,
} from './CartStyles';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getCartProducts() {
  try {
    const cartProducts = await AsyncStorage.getItem('cart');
    return cartProducts ? JSON.parse(cartProducts) : [];
  } catch (error) {
    console.log('Erro ao buscar produtos do carrinho CartScreen', error);
    return [];
  }
}

function sumTotalAmount(totalAmount: number, product: Array<any>) {
  product.map(item => {
    totalAmount += Number(item.product.price);
  });
  return totalAmount.toFixed(2);
}

let totalAmount = 0;

function CartScreen(): JSX.Element {
  const [cartProducts, setCartProducts] = React.useState<Array<any>>([]);

  const handleUpdateCart = async () => {
    try {
      const updatedCart = await getCartProducts();
      setCartProducts(updatedCart);
    } catch (error) {
      console.log('Erro ao buscar produtos do carrinho', error);
    }
  };

  useEffect(() => {
    getCartProducts().then(products => {
      setCartProducts(products);
    });
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
                btnType="remove"
                onUpdateCart={handleUpdateCart}
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
