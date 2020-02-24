import React from "react";
import { ModalCardHeadProp } from "../modifiers";
import { getClassName } from "helpers/components";

export default class ModalCardHead extends React.Component<ModalCardHeadProp> {
  render() {
    const className = getClassName(this.props, ["alignment"], "modal-card-title");
    return (
      <header className="modal-card-head">
        <p className={className}>{this.props.title}</p>
        <button onClick={this.props.closeButtonClicked} className="delete" aria-label="close"></button>
      </header>
    );
  }
}
