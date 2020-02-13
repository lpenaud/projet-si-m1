import React from "react";
import classNames from "classnames";

interface TabsProps {
  isBoxed?: boolean;
  isFullWidth?: boolean;
}

export default class Tabs extends React.Component<TabsProps> {
  render() {
    const className = classNames({
      'tabs': true,
      'is-boxed': this.props.isBoxed,
      'is-fullwidth': this.props.isFullWidth,
    })
    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}
