import React from "react";
import { ModalCardFootProp } from "../modifiers";

export default class ModalCardFoot extends React.Component<ModalCardFootProp> {
  render() {
    const style: React.CSSProperties = this.props.alignment === "right"
      ? { justifyContent: "end" }
      : {};
    return (
      <footer className="modal-card-foot" style={style}>
        {this.props.children}
      </footer>
    );
  }
}
