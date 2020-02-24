import React from "react";
import { InputProps } from "components/bulma/modifiers";
import { getClassName } from "helpers/components";
import classNames from "classnames";

export default class Input extends React.Component<InputProps> {
  input?: HTMLInputElement;

  get value(): string | undefined {
    return this.input?.value;
  }

  get valueAsDate(): Date | null | undefined {
    return this.input?.valueAsDate;
  }

  get valueAsNumber(): number | undefined {
    return this.input?.valueAsNumber;
  }

  render() {
    const className = classNames(
        getClassName(this.props, ["color", "size", "state"], "input"),
        {
          "is-static": this.props.isStatic,
          "is-rounded": this.props.isRounded,
        }
    );
    return (
      <input type={this.props.type}
        placeholder={this.props.placeholder}
        className={className}
        disabled={this.props.disabled}
        readOnly={this.props.readOnly}
        defaultValue={this.props.defaultValue}
        onChange={this.props.valueChanged}
        name={this.props.name}
        ref={(input) => this.input = input as HTMLInputElement}
      />
    );
  }
}
