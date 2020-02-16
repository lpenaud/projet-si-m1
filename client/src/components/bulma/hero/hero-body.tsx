import React from "react";

export default class HeroBody extends React.Component {
  render() {
    return (
      <div className="hero-body">
        {this.props.children}
      </div>
    )
  }
}