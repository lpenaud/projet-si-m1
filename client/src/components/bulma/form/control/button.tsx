import React from "react";
import { MainColor, Size, ButtonType, ButtonState } from "components/bulma/modifiers";
import { getClassName } from "helpers/components";
import classNames from "classnames";

interface ButtonProps {
  type?: ButtonType;
  color?: MainColor;
  isLight?: boolean;
  size?: Size;
  state?: ButtonState;
  isRounded?: boolean;
  isStatic?: boolean;
  isOutlined?: boolean;
  isInverted?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default class Button extends React.Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const className = classNames(
        getClassName(this.props, ["color", "size", "state"], "button"),
        {
          'is-static': this.props.isStatic,
          'is-light': this.props.isLight,
          'is-rounded': this.props.isRounded,
          'is-inverted': this.props.isInverted,
          'is-outlined': this.props.isOutlined,
        }
    );
    return (
      <button 
        type={this.props.type}
        className={className}
        disabled={this.props.disabled}
        onClick={this.onClick}
      >
        {this.props.children}
      </button>
      // <input type={this.props.type}
      //   placeholder={this.props.placeholder}
      //   className={className}
      //   disabled={this.props.disabled}
      //   readOnly={this.props.readOnly}
      //   onChange={this.onClick}
      // />
    );
  }
}
