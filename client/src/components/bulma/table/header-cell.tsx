import React from "react";
import { CellProps } from "../modifiers";
import { getClassName } from "helpers/components";

export default class HeaderCell extends React.Component<CellProps> {
  render() {
    const className = getClassName(this.props, ["alignment"]);
    return (
      <th className={className} colSpan={this.props.colSpan}>
        {this.props.children}
      </th>
    );
  }
}
