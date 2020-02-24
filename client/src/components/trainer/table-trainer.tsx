import React from "react";
import { ITrainer } from "../../../../lib/models";
import Table from "components/bulma/table/table";
import RowTrainer from "./row-trainer";
import HeaderCell from "components/bulma/table/header-cell";
import Buttons from "components/bulma/form/buttons";
import Button from "components/bulma/form/control/button";

interface TableTrainerProps {
  trainers: ITrainer[],
  fallback: boolean,
  trainerOnClick?: (trainer: Partial<ITrainer>) => void;
}

export default class TableTrainer extends React.Component<TableTrainerProps> {
  constructor(props: TableTrainerProps) {
    super(props);
    this.rowTrainerOnClick = this.rowTrainerOnClick.bind(this);
    this.newTrainer = this.newTrainer.bind(this);
  }

  rowTrainerOnClick(e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: RowTrainer) {
    if (this.props.trainerOnClick) {
      this.props.trainerOnClick(row.props.trainer);
    }
  }

  newTrainer() {
    if (this.props.trainerOnClick) {
      this.props.trainerOnClick({});
    }
  }

  render() {
    if (this.props.fallback) {
      return this.props.children;
    }
    return (
      <Table isFullwidth isHoverable>
        <thead>
          <tr>
            <HeaderCell alignment="has-text-centered">Id</HeaderCell>
            <HeaderCell alignment="has-text-centered">Nom</HeaderCell>
            <HeaderCell alignment="has-text-centered">Prénom</HeaderCell>
            <HeaderCell alignment="has-text-centered">mèl</HeaderCell>
          </tr>
        </thead>
        <tbody>
          {this.props.trainers.map((t, i) => (
            <RowTrainer key={i} trainer={t} onClick={this.rowTrainerOnClick} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <HeaderCell alignment="has-text-centered" colSpan={3}>{this.props.trainers.length} formateur(s)</HeaderCell>
            <HeaderCell alignment="has-text-centered">
              <Buttons hasAddons alignment="is-centered">
                <Button color="is-success" onClick={this.newTrainer}>Ajouter</Button>
              </Buttons>
            </HeaderCell>
          </tr>
        </tfoot>
      </Table>
    );
  }
}
