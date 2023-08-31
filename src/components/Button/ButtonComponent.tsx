import React from 'react';
import {Button, Container, ButtonText} from './ButtonStyles';
import {IButton} from '../../interfaces/Button';
import Icon from 'react-native-remix-icon';

function ButtonComponent(props: IButton): JSX.Element {
  const btnProps = props;

  let icon = null;
  if (btnProps.btnType === 'add') {
    icon = <Icon name="add-fill" size={20} color="white" />;
  } else if (btnProps.btnType === 'remove') {
    icon = <Icon name="delete-bin-5-fill" size={20} color="white" />;
  }

  return (
    <Container>
      <Button btnType={btnProps.btnType} onPress={btnProps.onPress}>
        <ButtonText>{btnProps.title}</ButtonText>
        {icon}
      </Button>
    </Container>
  );
}

export default ButtonComponent;
