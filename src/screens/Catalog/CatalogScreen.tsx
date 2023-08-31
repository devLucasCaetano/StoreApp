import React, {useEffect, useState} from 'react';
import {Container} from './CatalogStyles';
import ProductsComponent from '../../components/Products/ProductsComponent';
import {FlatList, GestureHandlerRootView} from 'react-native-gesture-handler';
import {IProducts} from '../../interfaces/Products';
import {productListMock} from '../../mocks/ProductsListMock';
import {ProductService} from '../../service/Product.service';
import {Text} from 'react-native-svg';

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
            <ProductsComponent item={item} btnType="add" />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </GestureHandlerRootView>
    </Container>
  );
}

export default CatalogScreen;
