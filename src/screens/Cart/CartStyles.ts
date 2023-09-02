import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  justify-content: space-between;
`;

export const ProductsContent = styled.View`
  width: 100%;
  max-height: 80%;
  height: auto;
  padding: 0 24px;
`;

export const AmountContent = styled.View`
  width: 100%;
  height: 20%;
  bottom: 0;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 0 16px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const TotalAmount = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
  color: ${({theme}) => theme.COLORS.BLUE_500};
  font-weight: bold;
`;
