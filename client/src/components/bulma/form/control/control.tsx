import React from "react";
import { ControlState } from "../../modifiers";
import { getClassName } from "helpers/components";

interface ControlProps {
  state?: ControlState;
}

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