import React from "react";
import LessonList from "components/lesson/list";
import Container from "components/bulma/container";
import Content from "components/bulma/content";
import Title from "components/bulma/title/title";

export default class Lessons extends React.Component {
  render() {
    return (
      <Container alignment="has-text-centered">
        <Title>Formations</Title>
        <Content size="is-large">
          <LessonList />
        </Content>
      </Container>
    )
  }
}
