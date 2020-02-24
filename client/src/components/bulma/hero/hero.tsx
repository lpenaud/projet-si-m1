import React from "react";
import { getClassName } from "helpers/components";
import { HeroProps } from "../modifiers";

export default class Hero extends React.Component<HeroProps> {
  render() {
    const className = getClassName(this.props, ["height", "mainColor"], "hero");
    return (
      <section className={className}>
        {this.props.children}
      </section>
    );
  }
}