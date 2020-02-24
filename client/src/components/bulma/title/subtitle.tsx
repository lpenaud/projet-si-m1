import React from "react";
import classNames from "classnames";
import { SubtitleProps } from "../modifiers";

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