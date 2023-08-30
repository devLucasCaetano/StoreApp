import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

// Estilos base do botão
const buttonBaseStyle = css`
  border-radius: 10px;
  padding: 12px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const addButtonStyle = css`
  ${buttonBaseStyle};
  background-color: ${({theme}) => theme.COLORS.GREEN_700};
`;

const removeButtonStyle = css`
  ${buttonBaseStyle};
  background-color: ${({theme}) => theme.COLORS.RED_DARK};
`;

export const Button = styled.TouchableOpacity<{type?: string}>`
  /* flex-wrap: wrap; */
  ${props => (props.type === 'add' ? addButtonStyle : null)}
  ${props => (props.type === 'remove' ? removeButtonStyle : null)}
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-weight: bold;
`;
