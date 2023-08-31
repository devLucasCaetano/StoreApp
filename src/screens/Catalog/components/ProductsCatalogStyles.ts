import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ProductsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0 0 16px;
  margin-bottom: 24px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  offset: 0px 2px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_100};
`;

export const ProductImage = styled.View`
  max-height: 220px;
  height: 100%;
  width: 45%;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
  border-radius: 8px;
  box-sizing: border-box;
`;

export const Img = styled.Image`
  max-height: 220px;
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

export const ProductsInfo = styled.View`
  background-color: transparent;
  max-width: 50%;
  width: 100%;
  max-height: 220px;
  padding: 12px;
  gap: 8px;
  right: 0;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.GRAY_700};
  max-height: 50px;
  line-height: 28px;
`;

export const Description = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.GRAY_300};
  max-height: 50px;
  line-height: 24px;
`;

export const Price = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.GREEN_700};
`;

export const ButtonArea = styled.View`
  align-self: flex-end;
  height: 50px;
  width: 60px;
`;
