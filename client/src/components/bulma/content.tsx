import React from "react";
import { Size, TextAlignment } from "./modifiers";
import { getClassName } from "helpers/components";

interface ContentProps {
  alignement?: TextAlignment
  size?: Size;
}

export default class Content extends React.Component<ContentProps> {
  render() {
    const className = getClassName(this.props, ["alignement", "size"], "content");
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}
