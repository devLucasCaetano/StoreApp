import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

const addButtonStyle = css`
  background-color: ${({theme}) => theme.COLORS.GREEN_700};
`;

const removeButtonStyle = css`
  background-color: ${({theme}) => theme.COLORS.RED_DARK};
`;

export const Button = styled.TouchableOpacity<{btnType?: string}>`
  ${props => (props.btnType === 'add' ? addButtonStyle : null)}
  ${props => (props.btnType === 'remove' ? removeButtonStyle : null)}
  border-radius: 5px;
  padding: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: white;
  font-weight: bold;
  text-align: center;
`;
