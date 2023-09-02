import React, {useEffect, useState} from 'react';
import {Container} from './CatalogStyles';
import {FlatList, GestureHandlerRootView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IProducts} from '../../interfaces/Products';
import {productListMock} from '../../mocks/ProductsListMock';
import {ProductService} from '../../services/api/Product.service';
import {Text} from 'react-native-svg';
import ProductsCatalogComponent from './components/ProductsCatalog';
import { ICart } from '../../interfaces/Cart';

function CatalogScreen(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [productListing, setProductListing] =
    useState<Array<IProducts>>(productListMock);

  const getData = async () => {
    setIsLoading(true);
    try {
      const {data} = await ProductService.getProducts();
      setProductListing(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  async function handleAddProductToCart(product: IProducts) {
    const products = await AsyncStorage.getItem('@cart');
    const productsJson = products ? JSON.parse(products) : [];

    const existingProductIndex = productsJson.findIndex(
      (cartItem: ICart) => cartItem.product.id === product.id,
    );

    if (existingProductIndex !== -1) {
      productsJson[existingProductIndex].quantity++;
    } else {
      productsJson.push({product, quantity: 1});
    }

    await AsyncStorage.setItem('@cart', JSON.stringify(productsJson));
  }

  useEffect(() => {
    getData();
  }, []);

  return isLoading ? (
    <Text> Carregando </Text>
  ) : (
    <Container>
      <GestureHandlerRootView>
        <FlatList
          data={productListing}
          renderItem={({item}) => (
            <ProductsCatalogComponent
              item={item}
              onProductChange={() => handleAddProductToCart(item)}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </GestureHandlerRootView>
    </Container>
  );
}

export default CatalogScreen;
