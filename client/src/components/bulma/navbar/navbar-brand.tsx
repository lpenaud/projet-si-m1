import React from "react";

export default class NavbarBrand extends React.Component {
  render() {
    return (
      <div className="navbar-brand">
        {this.props.children}
      </div>
    );
  }
}
