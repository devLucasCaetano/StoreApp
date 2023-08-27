import React from 'react';
import {Container, LogoIcon, Title} from './HeaderStyles';

function HeaderComponent(): JSX.Element {
  return (
    <Container>
      <LogoIcon width={60} />
      <Title>LC Store</Title>
    </Container>
  );
}

export default HeaderComponent;
