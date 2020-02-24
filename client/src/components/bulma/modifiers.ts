export type MainColor = "is-primary" 
  | "is-link" 
  | "is-info"
  | "is-success"
  | "is-warning"
  | "is-danger"
;

export type TextColor = "has-text-white"
  | "has-text-black"
  | "has-text-light"
  | "has-text-dark"
  | "has-text-info"
  | "has-text-link"
  | "has-text-success"
  | "has-text-warning"
  | "has-text-danger"
  | "has-text-black-bis"
  | "has-text-black-ter"
  | "has-text-grey-darker"
  | "has-text-grey-dark"
  | "has-text-grey"
  | "has-text-grey-light"
  | "has-text-grey-lighter"
  | "has-text-white-ter"
  | "has-text-white-bis"
;

export type Size = "is-small"
  | "is-medium"
  | "is-large"
;

export type TextAlignment = "has-text-centered"
  | "has-text-justified"
  | "has-text-left"
  | "has-text-right"
;

export type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type ControlState = "is-loading";

export type InputState = "is-hovered"
  | "is-focused"
;

export type InputType = "text"
  | "password"
  | "email"
  | "tel"
;

export type ButtonType = "submit"
  | "reset"
;

export type ButtonState = InputState
  | "is-active"
  | "is-loading"
;

export type ButtonsAlignment = "is-centered"
  | "is-right"
;

export type HeroSize = "is-medium"
  | "is-large"
  | "is-fullheight"
;

export interface TextProps {
  alignment?: TextAlignment;
  size?: Size;
  color?: TextColor;
}

export interface TableProps {
  isBordered?: boolean;
  isStriped?: boolean;
  isNarrow?: boolean;
  isHoverable?: boolean;
  isFullwidth?: boolean;
}

export interface RowProps {
  isSelected?: boolean;
  onClick?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
}

export interface CellProps extends TextProps {
  colSpan?: number;
}

export interface TitleProps {
  level?: TitleLevel;
  isSpaced?: boolean;
}

export interface SubtitleProps {
  level?: TitleLevel;
}

export interface NavbarMenuProps {
  isActive?: boolean;
}

export interface NavbarBurgerProps {
  isActive?: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface NavbarItemProps {
  isActive?: boolean;
}

export interface NavbarItemLinkProps extends NavbarItemProps {
  to: string;
}

export interface NavbarItemAProps extends NavbarItemProps {
  href: string;
}

export interface HeroProps {
  mainColor?: MainColor;
  height?: HeroSize;
}

export interface FieldProp {
  isGrouped?: boolean;
  hasAddons?: boolean;
}

export interface ButtonsProps {
  hasAddons?: boolean;
  alignment?: ButtonsAlignment;
}

export interface SelectStates {
  value: string;
}

export interface SelectProps {
  type: InputType;
  color?: MainColor;
  size?: Size;
  state?: InputState;
  isRounded?: boolean;
  disabled?: boolean;
  isMultiple?: boolean;
  valueChanged?: (state: Readonly<SelectStates>) => void;
}

export interface InputStates {
  value: string;
}

export interface InputProps {
  type: InputType;
  color?: MainColor;
  placeholder?: string;
  size?: Size;
  state?: InputState;
  isRounded?: boolean;
  isStatic?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  name?: string;
  defaultValue?: string;
  valueChanged?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ControlProps {
  state?: ControlState;
}

export interface ButtonProps {
  type?: ButtonType;
  color?: MainColor;
  isLight?: boolean;
  size?: Size;
  state?: ButtonState;
  isRounded?: boolean;
  isStatic?: boolean;
  isOutlined?: boolean;
  isInverted?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  form?: string;
}

export interface ModalProps {
  isActive?: boolean;
  closeButtonClicked?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export interface ModalCardHeadProp {
  title: string;
  alignment?: TextAlignment;
  closeButtonClicked?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export interface ModalCardFootProp {
  alignment?: "left" | "right";
}
