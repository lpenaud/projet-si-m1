import React from "react";
import { NavLink } from "react-router-dom";
import NavbarItem from "./navbar-item";
import { NavbarItemLinkProps } from "components/bulma/modifiers";

export default class NavbarItemLink extends NavbarItem<NavbarItemLinkProps> {
  render(): React.ReactNode {
    return (
      <NavLink exact to={this.props.to} className={this.defaultClassName} activeClassName="is-active">
        {this.props.children}
      </NavLink>
    );
  }
}
