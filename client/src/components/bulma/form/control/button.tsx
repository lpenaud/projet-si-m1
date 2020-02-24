import React from "react";
import { ButtonProps } from "components/bulma/modifiers";
import { getClassName } from "helpers/components";
import classNames from "classnames";

export default class Button extends React.Component<ButtonProps> {
  render() {
    const className = classNames(
        getClassName(this.props, ["color", "size", "state"], "button"),
        {
          "is-static": this.props.isStatic,
          "is-light": this.props.isLight,
          "is-rounded": this.props.isRounded,
          "is-inverted": this.props.isInverted,
          "is-outlined": this.props.isOutlined,
          "is-loading": this.props.isLoading,
        }
    );
    return (
      <button 
        type={this.props.type}
        className={className}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
        form={this.props.form}
      >
        {this.props.children}
      </button>
    );
  }
}
