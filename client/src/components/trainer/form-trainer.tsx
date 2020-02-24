import React from "react";
import { ITrainer } from "../../../../lib/models";
import Control from "components/bulma/form/control/control";
import Label from "components/bulma/form/label";
import Input from "components/bulma/form/control/input";

interface FormTrainerProps {
  trainer?: Partial<ITrainer>;
  onChange?: <K extends keyof ITrainer>(name: K, value: ITrainer[K]) => void;
}

export default class FormTrainer extends React.Component<FormTrainerProps> {

  constructor(props: FormTrainerProps) {
    super(props);
    this.valueChanged = this.valueChanged.bind(this);
  }

  valueChanged(e: React.ChangeEvent<HTMLInputElement>) {
    if (this.props.onChange) {
      console.log(e.currentTarget);
      const name = e.currentTarget.name as keyof ITrainer;
      this.props.onChange(name, e.currentTarget.value);
    }
  }

  render() {
    return (
      <form>
        <Control>
          <Label>Nom</Label>
          <Input name="lastName" defaultValue={this.props.trainer?.lastName} type="text" valueChanged={this.valueChanged} />
        </Control>
        <Control>
          <Label>Prénom</Label>
          <Input name="name" defaultValue={this.props.trainer?.name} type="text" valueChanged={this.valueChanged} />
        </Control>
        <Control>
          <Label>Mèl</Label>
          <Input name="email" defaultValue={this.props.trainer?.email} type="email" valueChanged={this.valueChanged} />
        </Control>
      </form>
    );
  }
}
