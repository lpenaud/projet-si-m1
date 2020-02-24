import React from "react";
import { CellProps } from "../modifiers";
import { getClassName } from "helpers/components";

export default class Cell extends React.Component<CellProps> {
  render() {
    const className = getClassName(this.props, ["alignment"]);
    return (
      <td className={className} colSpan={this.props.colSpan}>
        {this.props.children}
      </td>
    );
  }
}
