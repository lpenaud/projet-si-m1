import React from "react";
import { getClassName } from "helpers/components";
import { TextProps } from "./modifiers";

export default class Container extends React.Component<TextProps> {
  render() {
    const className = getClassName(this.props, ["alignment"], "container");
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}
