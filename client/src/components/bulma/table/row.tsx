import React from "react";
import { RowProps } from "../modifiers";

export default class Row extends React.Component<RowProps> {

  constructor(props: RowProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    return (
      <tr onClick={this.props.onClick} className={this.props.isSelected ? "is-selected" : ""}>
        {this.props.children}
      </tr>
    );
  }
}
