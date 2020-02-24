import React from "react";
import NavbarItem from "./navbar-item";
import { NavbarItemAProps } from "components/bulma/modifiers";

export default class NavbarItemA extends NavbarItem<NavbarItemAProps> {
  render(): React.ReactNode {
    return (
      <a href={this.props.href} className={this.defaultClassName}>
        {this.props.children}
      </a>
    );
  }
}
