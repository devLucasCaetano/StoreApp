export interface IButton {
  title: string;
  btnType: 'add' | 'remove';
  onPress: () => void;
}
