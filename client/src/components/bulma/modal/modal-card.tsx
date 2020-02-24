import React from "react";
import classNames from "classnames";
import { ModalProps } from "../modifiers";

export default class ModalCard extends React.Component<ModalProps> {
  render() {
    const className = classNames({
      "modal": true,
      "is-active": this.props.isActive,
    });
    return (
      <div className={className}>
        <div className="modal-background" onClick={this.props.closeButtonClicked}></div>
        <div className="modal-card">
          {this.props.children}
        </div>
      </div>
    );
  }
}
