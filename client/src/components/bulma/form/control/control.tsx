import React from "react";
import { ControlProps } from "../../modifiers";
import { getClassName } from "helpers/components";

export default class Control extends React.Component<ControlProps> {
  render() {
    const className = getClassName(this.props, ["state"], "control");
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}