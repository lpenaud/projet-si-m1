import React from "react";
import Container from "components/container";
import Title from "components/bulma/title/title";
import Subtitle from "components/bulma/title/subtitle";

export default class Root extends React.Component {
  render() {
    return (
      <Container alignment="has-text-centered">
        <Title>Title</Title>
        <Subtitle>Subtitle</Subtitle>
      </Container>
    );
  }
}
