import React from "react";
import { ModalProps } from "../modifiers";
import classNames from "classnames";

export default class Modal extends React.Component<ModalProps> {
  render() {
    const className = classNames({
      "modal": true,
      "is-active": this.props.isActive,
    });
    return (
      <div className={className}>
        <div className="modal-background" onClick={this.props.closeButtonClicked}></div>
        <div className="modal-content">
          {this.props.children}
        </div>
        <button onClick={this.props.closeButtonClicked} className="modal-close is-large" aria-label="close"></button>
      </div>
    );
  }
}
