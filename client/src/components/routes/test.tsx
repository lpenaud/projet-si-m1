import React from "react";
import Control from "components/bulma/form/control/control";
import Input, { InputStates } from "components/bulma/form/control/input";
import Label from "components/bulma/form/label";
import Field from "components/bulma/form/field";
import Container from "components/container";
import { IBook } from "../../../../lib/models";
import { getBooks } from "../../api/book";

interface TestState extends Omit<IBook, "_id"> {
  readOnly: boolean;
}

export default class Test extends React.Component<{}, TestState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      author: "Auteur",
      title: "Titre",
      genre: "Genre",
      readOnly: false,
    };
  }

  componentDidMount() {
    getBooks().then((IBooks) => {
      const state = { ...this.state, ...IBooks[0] };
      this.setState(state);
    });
  }

  changed(state: InputStates) {
    console.log(state)
  }

  render() {
    return (
      // TODO: FormContainer
      <Container>
        <Field key="title">
          <Label>Titre</Label>
          <Control>
            <Input type="text" valueChanged={this.changed} initialValue={this.state.title} readOnly={this.state.readOnly} />
          </Control>
        </Field>
        <Field key="author">
          <Label>Auteur</Label>
          <Control>
            <Input type="text" valueChanged={this.changed} initialValue={this.state.author} readOnly={this.state.readOnly} />
          </Control>
        </Field>
        <Field key="genre">
          <Label>Genre</Label>
          <Control>
            <Input type="text" valueChanged={this.changed} initialValue={this.state.genre} readOnly={this.state.readOnly} />
          </Control>
        </Field>
      </Container>
    )
  }
}
