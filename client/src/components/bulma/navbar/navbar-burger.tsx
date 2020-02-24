import React from "react";
import classNames from "classnames";
import { NavbarBurgerProps } from "../modifiers";

export default class NavbarBurger extends React.Component<NavbarBurgerProps> {
  render() {
    const className = classNames({
      "navbar-burger": true,
      "is-active": this.props.isActive,
    });
    return (
      <div className={className} aria-label="menu" aria-expanded="false" onClick={this.props.onClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}
