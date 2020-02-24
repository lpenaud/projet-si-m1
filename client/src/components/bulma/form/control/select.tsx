import React from "react";
import { MainColor, Size, InputState, InputType } from "components/bulma/modifiers";
import { getClassName } from "helpers/components";
import classNames from "classnames";

interface SelectStates {
  value: string;
}

interface SelectProps {
  type: InputType;
  color?: MainColor;
  size?: Size;
  state?: InputState;
  isRounded?: boolean;
  disabled?: boolean;
  isMultiple?: boolean;
  valueChanged?: (state: Readonly<SelectStates>) => void;
}

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
