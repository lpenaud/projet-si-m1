import logo from './logo.svg';
import './App.css';
import { Book } from '../../lib/models';
import { getBooks } from './api';
import React from 'react';
import BookComponent from './components/book';

interface AppState {
  books: Book[];
  err: string;
}

export default class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      books: [],
      err: "",
    }
  }

  updateState<T extends keyof AppState>(key: T, value: AppState[T]) {
    const state = { ...this.state };
    state[key] = value;
    this.setState(state);
  }

  componentDidMount() {
    getBooks().then((books) => {
      this.updateState("books", books);
    }).catch((err) => {
      this.updateState("err", err);
    });
  }

  render() {
    let main;
    if (this.state.err) {
      main = <pre>{this.state.err}</pre>;
    } else if (this.state.books.length > 0) {
      main = <ul>{ this.state.books.map(({ _id, author, title, genre }) => <BookComponent key={_id} author={author} title={title} genre={genre || ""} />) }</ul>;
    } else {
      main = "Chargment...";
    }
    console.log("ta mère")
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main>
          {main}
        </main>
      </div>
    );
  }
}
