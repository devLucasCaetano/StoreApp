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
import {IProducts} from '../../interfaces/Products';
import {ICart} from '../../interfaces/Cart';

function CartScreen(): JSX.Element {
  const [cartProducts, setCartProducts] = React.useState<ICart[]>([]);

  async function handleDeleteProductFromCart(productToDelete: IProducts) {
    const products = await AsyncStorage.getItem('@cart');
    const productsJson = products ? JSON.parse(products) : [];

    const existingProductIndex = productsJson.findIndex(
      (product: ICart) => product.product.id === productToDelete.id,
    );

    if (existingProductIndex !== -1) {
      const existingProduct = productsJson[existingProductIndex];

      if (existingProduct.quantity > 1) {
        existingProduct.quantity--;
      } else {
        productsJson.splice(existingProductIndex, 1);
      }

      await AsyncStorage.setItem('@cart', JSON.stringify(productsJson));
      setCartProducts([...productsJson]);
    }
  }

  useEffect(() => {
    async function getProducts() {
      const products = await AsyncStorage.getItem('@cart');
      const productsJson = products ? JSON.parse(products) : [];
      setCartProducts(productsJson);
    }
    getProducts();
  }, []);

  const handleTotalAmount = () => {
    let total = 0;
    cartProducts.forEach(item => {
      total += Number(item.product.price) * item.quantity;
    });

    return total;
  };

  return (
    <Container>
      <ProductsContent>
        <GestureHandlerRootView>
          <FlatList
            data={cartProducts}
            renderItem={({item}) => (
              <ProductsCartComponent
                products={item.product}
                quantity={item.quantity}
                onProductChange={() =>
                  handleDeleteProductFromCart(
                    item.product as unknown as IProducts,
                  )
                }
              />
            )}
            keyExtractor={item => item.product.id.toString()}
          />
        </GestureHandlerRootView>
      </ProductsContent>
      <AmountContent>
        <TotalAmount>
          Total:R$
          {handleTotalAmount()}
        </TotalAmount>
        {/* todo btn comprar */}
      </AmountContent>
    </Container>
  );
}

export default CartScreen;
