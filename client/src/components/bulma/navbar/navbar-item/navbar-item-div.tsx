import React from "react";
import NavbarItem from "./navbar-item";

export default class NavbarItemDiv extends NavbarItem {
  render() {
    return (
      <div className={this.defaultClassName}>
        {this.props.children}
      </div>
    );
  }
}