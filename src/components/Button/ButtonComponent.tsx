import React from 'react';
import {Button, Container, ButtonText} from './ButtonStyles';
import {IButton} from '../../interfaces/Button';

function ButtonComponent(props: IButton, productId: number): JSX.Element {
  const btnProps = props;
  const id = productId;

  if (btnProps.btnType === 'add') {
    return (
      <Container>
        <Button onPress={() => {}} btnType={btnProps.btnType}>
          <ButtonText>Adicionar ao carrinho</ButtonText>
        </Button>
      </Container>
    );
  } else if (btnProps.btnType === 'remove') {
    return (
      <Container>
        <Button onPress={() => {}} btnType={btnProps.btnType}>
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
