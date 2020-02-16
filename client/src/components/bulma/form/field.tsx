import React from "react";
import classNames from "classnames";

interface FieldProp {
  isGrouped?: boolean;
  hasAddons?: boolean;
}

export default class Field extends React.Component<FieldProp> {
  render() {
    const className = classNames({
      field: true,
      'is-grouped': this.props.isGrouped,
      'has-addons': this.props.hasAddons,
    });
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}
