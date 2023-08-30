import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 16px 0;
`;

export const ProductImage = styled.View`
  height: 220px;
  width: 45%;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
  border-radius: 8px;
  box-sizing: border-box;
`;

export const Image = styled.Image``;

export const GroupDescription = styled.View`
  background-color: transparent;
  max-width: 45%;
  width: 100%;
  max-height: 220px;
  padding: 12px;
  gap: 8px;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.GRAY_700};
`;

export const Price = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.GREEN_700};
`;

export const Description = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.GRAY_300};
`;

export const AddButton = styled.TouchableOpacity<{
  color?: string
}>`
  background-color: ${({theme, color}) => color ?? theme.COLORS.GREEN_700};
  border-radius: 5px;
  padding: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: white
`;
