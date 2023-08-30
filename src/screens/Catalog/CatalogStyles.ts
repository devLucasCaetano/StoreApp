import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  padding: 16px 24px;
`;

export const ProductsContent = styled.View`
  flex-direction: row;
  width: 100%;
  /* height:100%; */
`;

export const ProductsButton = styled.View`
  position: absolute;
  /* max-width: 150px; */
  max-height: 120px;
  flex-wrap: wrap;
  bottom:60;
  right:0;
`;
