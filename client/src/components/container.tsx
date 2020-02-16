import React from "react";
import { TextAlignment } from "./bulma/modifiers";
import { getClassName } from "helpers/components";

interface ContainerProps {
  alignment?: TextAlignment;
}

export default class Container extends React.Component<ContainerProps> {
  render() {
    const className = getClassName(this.props, ["alignment"], "container");
    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}
