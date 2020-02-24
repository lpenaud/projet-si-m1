import React from "react";
import { SelectProps, SelectStates } from "components/bulma/modifiers";
import { getClassName } from "helpers/components";
import classNames from "classnames";

export default class Select extends React.Component<SelectProps, SelectStates> {
  constructor(props: SelectProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      value: "",
    };
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (this.props.valueChanged) {
      this.props.valueChanged(this.state);
    }
  }

  render() {
    const className = classNames(
        getClassName(this.props, ["color", "size", "state"], "select"),
        {
          "is-multiple": this.props.isMultiple,
          "is-rounded": this.props.isRounded,
        }
    );
    return (
      <div className={className}>
        <select>
          {this.props.children}
        </select>
      </div>
    );
  }
}
