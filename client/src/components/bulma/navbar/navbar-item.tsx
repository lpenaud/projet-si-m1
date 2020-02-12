import React from "react";
import classNames from "classnames";

interface NavbarItemProps {
  isActive?: boolean;
  renderAs?: "div" | "a";
  href?: string;
}

export default class NavbarItem extends React.Component<NavbarItemProps> {
  static defaultProps: NavbarItemProps = {
    isActive: false,
    renderAs: "a",
  }

  constructor(props: NavbarItemProps) {
    super({ ...NavbarItem.defaultProps, ...props });
  }

  render() {
    const className = classNames({
      'navbar-item': true,
      'is-active': this.props.isActive
    });
    return this.props.renderAs === "a" 
      ? (
        <a href={this.props.href} className={className}>
          {this.props.children}
        </a>
      ) : (
        <div className={className}>
          {this.props.children}
        </div>
      )
  }
}