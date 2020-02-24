import React from "react";
import { MainColor } from "../modifiers";
import { getClassName } from "helpers/components";

type HeroSize = "is-medium"
  | "is-large"
  | "is-fullheight"
;

interface HeroProps {
  mainColor?: MainColor;
  height?: HeroSize;
}

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