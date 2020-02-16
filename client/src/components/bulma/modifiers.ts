export type MainColor = "is-primary" 
  | "is-link" 
  | "is-info"
  | "is-success"
  | "is-warning"
  | "is-danger"
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
  | 'is-active'
  | 'is-loading'
;

export type ButtonsAlignment = 'is-centered'
  | 'is-right'
;
