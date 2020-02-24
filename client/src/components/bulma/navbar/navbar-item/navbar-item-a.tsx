import React from "react";
import NavbarItem, { NavbarItemProps } from "./navbar-item";

interface NavbarItemAProps extends NavbarItemProps {
  href: string;
}

export default class NavbarItemA extends NavbarItem<NavbarItemAProps> {
  render(): React.ReactNode {
    return (
      <a href={this.props.href} className={this.defaultClassName}>
        {this.props.children}
      </a>
    );
  }
}
