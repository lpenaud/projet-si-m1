import React from "react";
import classNames from "classnames";
import { ButtonsProps } from "../modifiers";

export default class Buttons extends React.Component<ButtonsProps> {
  render() {
    const className = classNames({
      "buttons": true,
      "has-addons": this.props.hasAddons,
      [`${this.props.alignment}`]: this.props.alignment,
    });
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}
