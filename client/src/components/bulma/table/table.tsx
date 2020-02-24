import React from "react";
import { TableProps } from "../modifiers";
import classNames from "classnames";

export default class Table extends React.Component<TableProps> {
  render() {
    const className = classNames({
      "table": true,
      "is-bordered": this.props.isBordered,
      "is-striped": this.props.isStriped,
      "is-narrow": this.props.isNarrow,
      "is-hoverable": this.props.isHoverable,
      "is-fullwidth": this.props.isFullwidth,
    });
    return (
      <table className={className}>
        {this.props.children}
      </table>
    );
  }
}
