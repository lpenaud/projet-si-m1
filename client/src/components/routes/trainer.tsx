import React from "react";
import Container from "components/bulma/container";
import Title from "components/bulma/title/title";
import TableTrainer from "components/trainer/table-trainer";
import ModalCard from "components/bulma/modal/modal-card";
import ModalCardHead from "components/bulma/modal/modal-card-head";
import ModalCardBody from "components/bulma/modal/modal-card-body";
import ModalCardFoot from "components/bulma/modal/modal-card-foot";
import Button from "components/bulma/form/control/button";
import { ITrainer } from "../../../../lib/models";
import FormTrainer from "components/trainer/form-trainer";
import { updateTrainer, getTrainers, newTrainer, deleteTrainer } from "api/trainer";
import Subtitle from "components/bulma/title/subtitle";

interface TrainerState {
  modalIsActive: boolean;
  loading: boolean;
  error?: Error;
  currentTrainer: Partial<ITrainer>;
  trainers: ITrainer[];
}

export default class Trainer extends React.Component<{}, TrainerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      trainers: [],
      loading: true,
      modalIsActive: false,
      currentTrainer: {
        email: "",
        lastName: "",
        name: "",
      }
    };
    this.trainerOnClick = this.trainerOnClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.formOnChange = this.formOnChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.deleteTrainer = this.deleteTrainer.bind(this);
  }

  componentDidMount() {
    this.getTrainers();
  }

  closeModal() {
    this.setState({
      modalIsActive: false,
    });
  }

  getTrainers() {
    getTrainers().then((trainers) => {
      this.setState({
        loading: false,
        trainers,
      });
    }).catch((error) => {
      this.setState({
        loading: false,
        error,
      });
    });
  }

  trainerOnClick(trainer: Partial<ITrainer>) {
    this.setState({
      currentTrainer: trainer,
      modalIsActive: true,
    });
  }

  formOnChange<K extends keyof ITrainer>(key: K, value: ITrainer[K]) {
    this.setState({
      currentTrainer: {
        ...this.state.currentTrainer,
        [key]: value,
      }
    });
  }

  submitForm() {
    this.setState({ loading: true, modalIsActive: false });
    if (this.state.currentTrainer.id) {
      updateTrainer(this.state.currentTrainer as ITrainer).then(() => {
        this.setState({
          loading: false,
        });
        this.getTrainers();
      }).catch((error) => {
        this.setState({
          loading: true,
          error,
        });
      });
    } else {
      newTrainer(this.state.currentTrainer as ITrainer).then((trainer) => {
        this.setState({
          loading: false,
          trainers: this.state.trainers.concat(trainer)
        });
      }).catch((error) => {
        this.setState({
          loading: false,
          error,
        });
      });
    }
  }

  deleteTrainer() {
    if (this.state.currentTrainer.id) {
      this.setState({
        loading: true,
        modalIsActive: false,
      });
      deleteTrainer(this.state.currentTrainer.id).then(() => {
        this.setState({
          loading: false,
          currentTrainer: {},
        });
        this.getTrainers();
      }).catch((error) => {
        this.setState({
          error,
          loading: false,
        });
      });
    }
  }

  render() {
    return (
      <Container alignment="has-text-centered">
        <ModalCard isActive={this.state.modalIsActive} closeButtonClicked={this.closeModal}>
          <ModalCardHead closeButtonClicked={this.closeModal} alignment="has-text-left" title="Mise-à-jour d'un formateur" />
          <ModalCardBody alignment="has-text-left" color="has-text-black-ter">
            <FormTrainer onChange={this.formOnChange} trainer={this.state.currentTrainer} key={this.state.currentTrainer?.id} />
          </ModalCardBody>
          <ModalCardFoot alignment="right">
            <Button onClick={this.submitForm} color="is-success">Envoyer</Button>
            <Button onClick={this.deleteTrainer} color="is-danger">Supprimer</Button>
            <Button onClick={this.closeModal} color="is-warning">Fermer</Button>
          </ModalCardFoot>
        </ModalCard>
        <Title>Liste formateur(s)</Title>
        <TableTrainer fallback={this.state.hasOwnProperty("error") || this.state.loading} trainers={this.state.trainers} trainerOnClick={this.trainerOnClick}>
          {this.state.error
            ? <Subtitle>{this.state.error.message}</Subtitle>
            : <Button isLoading color="is-primary">Chargement...</Button>
          }
          <Subtitle></Subtitle>
        </TableTrainer>
      </Container>
    );
  }
}
