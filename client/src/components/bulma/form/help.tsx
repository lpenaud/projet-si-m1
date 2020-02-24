import React from "react";

export default class Help extends React.Component {
  render() {
    return (
      <p className="help">{this.props.children}</p>
    );
  }
}
