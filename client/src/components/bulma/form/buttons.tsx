import React from "react";
import classNames from "classnames";
import { ButtonsAlignment } from "../modifiers";

interface ButtonsProps {
  hasAddons?: boolean;
  alignment?: ButtonsAlignment;
}

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
