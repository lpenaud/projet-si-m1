import React from "react";
import { TitleLevel } from "../modifiers";
import classNames from "classnames";

interface TitleProps {
  level?: TitleLevel;
  isSpaced?: boolean;
}

export default class Title extends React.Component<TitleProps> {
  render() {
    const className = classNames({
      "title": true,
      [`is-${this.props.level}`]: this.props.level,
      "is-spaced": this.props.isSpaced,
    });
    return (
      <p className={className}>
        {this.props.children}
      </p>
    );
  }
}