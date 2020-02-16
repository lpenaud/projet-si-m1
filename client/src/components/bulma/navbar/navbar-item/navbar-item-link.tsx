import React from "react";
import NavbarItem, { NavbarItemProps } from "./navbar-item";
import { NavLink } from "react-router-dom";

interface NavbarItemLinkProps extends NavbarItemProps {
  to: string;
}

export default class NavbarItemLink extends NavbarItem<NavbarItemLinkProps> {
  render(): React.ReactNode {
    return (
      <NavLink exact to={this.props.to} className={this.defaultClassName} activeClassName="is-active">
        {this.props.children}
      </NavLink>
    )
  }
}
