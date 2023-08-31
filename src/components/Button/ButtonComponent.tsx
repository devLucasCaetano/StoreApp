import React from 'react';
import {Button, Container, ButtonText} from './ButtonStyles';
import {IButton} from '../../interfaces/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IProducts} from '../../interfaces/Products';

async function handleAddProductToCart(product: IProducts) {
  try {
    const existingCart = await AsyncStorage.getItem('cart');
    const cart = existingCart ? JSON.parse(existingCart) : [];
    const productIndex = cart.findIndex(
      (item: any) => item.product.id === product.id,
    );

    if (productIndex !== -1) {
      cart[productIndex].quantity += 1;
      console.log('adicionando ', cart[productIndex].product.id);
    } else {
      cart.push({product, quantity: 1});
    }

    await AsyncStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.log('Erro ao adicionar produto', error);
  }
}

async function handleRemoveProductFromCart(product: IProducts) {
  try {
    const existingCart = await AsyncStorage.getItem('cart');
    const cart = existingCart ? JSON.parse(existingCart) : [];
    const productIndex = cart.findIndex(
      (item: any) => item.product.id === product.id,
    );

    if (productIndex !== -1) {
      cart[productIndex].quantity -= 1;
      if (cart[productIndex].quantity === 0) {
        cart.splice(productIndex, 1);
      }
      console.log('removendo ', cart[productIndex].product.id);
    } else {
      console.log('Produto não encontrado');
    }

    await AsyncStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.log('Erro ao remover produto', error);
  }
}

function ButtonComponent(
  props: IButton,
): JSX.Element {
  const btnProps = props;

  const handleAddToCart = async () => {
    await handleAddProductToCart(props.product);
    console.log('add prod cart', props.product);
  };

  const handleRemoveFromCart = async () => {
    await handleRemoveProductFromCart(props.product);
    props.onUpdateCart();
    console.log('remove prod cart', props.product);
  };

  if (btnProps.btnType === 'add') {
    return (
      <Container>
        <Button onPress={handleAddToCart} btnType={btnProps.btnType}>
          <ButtonText>Adicionar ao carrinho</ButtonText>
        </Button>
      </Container>
    );
  } else if (btnProps.btnType === 'remove') {
    return (
      <Container>
        <Button onPress={handleRemoveFromCart} btnType={btnProps.btnType}>
          <ButtonText> Remover </ButtonText>
        </Button>
      </Container>
    );
  } else {
    return (
      <Container>
        <Button onPress={() => {}}>
          <ButtonText> Err </ButtonText>
        </Button>
      </Container>
    );
  }
}

export default ButtonComponent;
