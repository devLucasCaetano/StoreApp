import React from 'react';
import {Button, Container, ButtonText} from './ButtonStyles';
import {IButton} from '../../interfaces/Button';

function ButtonComponent(props: IButton): JSX.Element {
  const btnProps = props;

  if (btnProps.btnType === 'add') {
    return (
      <Container>
        <Button
          onPress={() => {
            console.log('fui apertado add', btnProps.btnType);
          }}
          btnType={btnProps.btnType}>
          <ButtonText>Adicionar ao carrinho</ButtonText>
        </Button>
      </Container>
    );
  } else if (btnProps.btnType === 'remove') {
    return (
      <Container>
        <Button
          onPress={() => {
            console.log('fui apertado remove', btnProps.btnType);
          }}
          btnType={btnProps.btnType}>
          <ButtonText> Remover </ButtonText>
        </Button>
      </Container>
    );
  } else {
    return (
      <Container>
        <Button
          onPress={() => {
            console.log('entrou no else');
          }}>
          <ButtonText> Err </ButtonText>
        </Button>
      </Container>
    );
  }
}

export default ButtonComponent;
