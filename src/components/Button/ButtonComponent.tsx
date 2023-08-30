import React from 'react';
import {Button, Container, Title} from './ButtonStyles';
import {IButton} from '../../interfaces/Button';

function ButtonComponent(props: IButton): JSX.Element {
  const {title, type} = props;

  return (
    <Container>
      <Button type={type}>
        <Title>{title}</Title>
      </Button>
    </Container>
  );
}

export default ButtonComponent;
