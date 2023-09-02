import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px 0;
`;

export const ProductsView = styled.View`
  background-color: ${({theme}) => theme.COLORS.WHITE};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 8px;

  border: 1px solid ${({theme}) => theme.COLORS.GRAY_100};
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  offset: 0px 2px;
  box-sizing: border-box;
`;

export const ProductImage = styled.View`
  height: 100%;
  width: 20%;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
  border-radius: 8px;
  box-sizing: border-box;
`;

export const Img = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  max-width: 80%;
  width: 100%;
  padding: 8px 0 8px 8px;
  gap: 8px;
  box-sizing: border-box;
`;
export const TitleQuantity = styled.View`
  max-width: 40%;
  justify-items: center;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.GRAY_700};
  max-height: 50%;
  align-self: flex-start;
`;

export const Quantity = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.GRAY_300};
  width: 100%;
  max-height: 50%;
`;

export const Price = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.GREEN_700};
  max-width: 20%;
  width: 100%;
`;

export const ButtonArea = styled.View`
  max-width: 60px;
  width: 100%;
`;
