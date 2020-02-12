import React from "react";

export default class HeroFoot extends React.Component {
  render() {
    return (
      <div className="hero-foot">
        {this.props.children}
      </div>
    )
  }
}