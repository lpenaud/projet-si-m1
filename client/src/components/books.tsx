import React from "react";
import { Book } from "../../../lib/models";
import { getBooks } from "../api/book";
import { updateState } from "../helpers/components";

interface BooksComponentState {
  books: Book[],
  error: string;
}

function BooksTr(props: Required<Omit<Book, "_id">>) {
  return (
    <tr>
        <td>{props.title}</td>
        <td>{props.author}</td>
        <td>{props.genre}</td>
    </tr>
)
}

function BooksThead() {
  return (
    <thead>
      <tr>
        <th>Auteur</th>
        <th>Titre</th>
        <th>Genre</th>
      </tr>
    </thead>
  )
}

function BooksTfoot(props: { length: number }) {
   return (
     <tfoot>
       <tr>
          <th colSpan={3}>Nombre de livre : {props.length}</th>
       </tr>
     </tfoot>
   )
}

export default class BooksComponent extends React.Component<unknown, BooksComponentState> {
  constructor(prop: unknown) {
    super(prop);
    this.state = {
      books: [],
      error: "",
    }
  }

  componentWillMount() {
    getBooks().then((books) => {
      updateState(this, "books", books);
    }).catch((err: Error) => {
      updateState(this, "error", err.message);
    });
  }

  render() {
    let content;
    if (this.state.books.length > 0) {
      content = <table>
        <BooksThead />
        <tbody>
          { this.state.books.map(({ _id, author, title, genre }) => <BooksTr key={_id} author={author} title={title} genre={genre || ""} />) }
        </tbody>
        <BooksTfoot length={this.state.books.length} />
      </table>;
    } else if (this.state.error) {
      content = <pre>{this.state.error}</pre>
    } else {
      content = "Chargement...";
    }
    return (
      <div>
        {content}
      </div>
    )
  }
}
