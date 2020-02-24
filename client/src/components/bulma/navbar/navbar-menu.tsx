import React from "react";
import classNames from "classnames";

interface NavbarMenuProps {
  isActive?: boolean;
}

export default class NavbarMenu extends React.Component<NavbarMenuProps> {
  render() {
    const className = classNames({
      "navbar-menu": true,
      "is-active": this.props.isActive,
    });
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}