import styled from 'styled-components/native';
import Logo from '../../assets/icons/lucas-logo-claro.svg';

export const Container = styled.View`
  height: 100px;
  background-color: ${({theme}) => theme.COLORS.BLUE_500};
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 60px;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-weight: bold;
`;

export const LogoIcon = styled(Logo)``;
