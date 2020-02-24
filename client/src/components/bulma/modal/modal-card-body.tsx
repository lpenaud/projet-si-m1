import React from "react";
import { TextProps } from "../modifiers";
import { getClassName } from "helpers/components";

export default class ModalCardBody extends React.Component<TextProps> {
  render() {
    const className = getClassName(this.props, ["alignment", "size", "color"], "modal-card-body");
    return (
      <section className={className}>
        {this.props.children}
      </section>
    );
  }
}
