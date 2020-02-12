import React from "react";

export default class NavbarEnd extends React.Component {
  render() {
    return (
      <div className="navbar-end">
        {this.props.children}
      </div>
    )
  }
}