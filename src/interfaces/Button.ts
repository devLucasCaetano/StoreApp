export interface IButton {
  title: string;
  type: ButtonType;
}

export enum ButtonType {
  add = 'add',
  remove = 'remove',
}
