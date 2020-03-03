import React from "react";
import { getLessons } from "api/lesson";
import { ILesson } from "../../../../lib/models";

interface LessonListState {
  lessons: ILesson[];
}

export default class LessonList extends React.Component<{}, LessonListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      lessons: [],
    };
  }

  componentDidMount() {
    getLessons().then((lessons) => {
      this.setState({
        lessons,
      });
    })
  }

  render() {
    return (
      <ul>
        { this.state.lessons.map(l => <li>{l.name}</li>) }
      </ul>
    )
  }
}
