import React from "react";
import classNames from "classnames";
import { TitleLevel } from "../modifiers";

interface SubtitleProps {
  level?: TitleLevel;
}

export default class Subtitle extends React.Component<SubtitleProps> {
  render() {
    const className = classNames({
      "subtitle": true,
      [`is-${this.props.level}`]: this.props.level,
    });
    return (
      <p className={className}>
        {this.props.children}
      </p>
    );
  }
}