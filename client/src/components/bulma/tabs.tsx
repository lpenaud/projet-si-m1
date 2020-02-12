import React from "react";
import classNames from "classnames";

interface TabsProps {
  renderAs?: "div" | "nav";
  isBoxed?: boolean;
  isFullWidth?: boolean;
}

export default class Tabs extends React.Component<TabsProps> {
  static defaultProps: TabsProps = {
    renderAs: "div",
    isBoxed: false,
    isFullWidth: false
  }

  constructor(props: TabsProps) {
    super({ ...Tabs.defaultProps, ...props });
  }

  render() {
    const className = classNames({
      'tabs': true,
      'is-boxed': this.props.isBoxed,
      'is-fullwidth': this.props.isFullWidth,
    })
    return this.props.renderAs === "div" ? (
      <div className={className}>
        {this.props.children}
      </div>
    ) : (
      <nav className={className}>
        {this.props.children}
      </nav>
    )
  }
}
