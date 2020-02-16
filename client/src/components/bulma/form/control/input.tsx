import React from "react";
import { MainColor, Size, InputState, InputType } from "components/bulma/modifiers";
import { getClassName, updateState } from "helpers/components";
import classNames from "classnames";

export interface InputStates {
  value: string;
}

interface InputProps {
  type: InputType;
  color?: MainColor;
  placeholder?: string;
  size?: Size;
  state?: InputState;
  isRounded?: boolean;
  isStatic?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  initialValue?: string;
  valueChanged?: (state: InputStates) => void;
}

export default class Input extends React.Component<InputProps, InputStates> {
  constructor(props: InputProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      value: "",
    };
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const state = { ...this.state };
    state.value = e.currentTarget.value;
    this.setState(state, () => {
      if (this.props.valueChanged) {
        this.props.valueChanged(this.state);
      }
    })
  }

  componentDidUpdate(prevProps: Readonly<InputProps>) {
    if (this.props.initialValue !== undefined && prevProps.initialValue !== this.props.initialValue) {
      updateState(this, "value", this.props.initialValue);
    }
  }

  render() {
    const className = classNames(
        getClassName(this.props, ["color", "size", "state"], "input"),
        {
          'is-static': this.props.isStatic,
          'is-rounded': this.props.isRounded,
        }
    );
    const value = this.state.value;
    return (
      <input type={this.props.type}
        placeholder={this.props.placeholder}
        className={className}
        disabled={this.props.disabled}
        readOnly={this.props.readOnly}
        onChange={this.onChange}
        value={value}
      />
    );
  }
}
