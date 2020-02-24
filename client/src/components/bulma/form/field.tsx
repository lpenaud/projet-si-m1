import React from "react";
import classNames from "classnames";
import { FieldProp } from "../modifiers";

export default class Field extends React.Component<FieldProp> {
  render() {
    const className = classNames({
      field: true,
      "is-grouped": this.props.isGrouped,
      "has-addons": this.props.hasAddons,
    });
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}
