import React from "react";

export default class HeroHead extends React.Component {
  render() {
    return (
      <div className="hero-head">
        {this.props.children}
      </div>
    )
  }
}