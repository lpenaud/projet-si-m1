import React from "react";
import { ITrainer } from "../../../../lib/models";
import Row from "components/bulma/table/row";
import Cell from "components/bulma/table/cell";

interface RowTrainerProps {
  trainer: ITrainer;
  onClick?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: RowTrainer) => void;
}

export default class RowTrainer extends React.Component<RowTrainerProps> {
  constructor(props: RowTrainerProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) {
    if (this.props.onClick) {
      this.props.onClick(e, this);
    }
  }

  render() {
    return (
      <Row onClick={this.onClick}>
        <Cell alignment="has-text-centered">{this.props.trainer.id}</Cell>
        <Cell alignment="has-text-centered">{this.props.trainer.lastName}</Cell>
        <Cell alignment="has-text-centered">{this.props.trainer.name}</Cell>
        <Cell alignment="has-text-centered">{this.props.trainer.email}</Cell>
      </Row>
    );
  }
}
