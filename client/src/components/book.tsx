import * as React from "react";
import { Book } from "../../../lib/models";

interface BookComponentState extends Required<Omit<Book, "_id">> {

}

export default class BookComponent extends React.Component<BookComponentState, unknown> {
    render() {
        return (
            <li>{this.props.title} - {this.props.author}</li>
        )
    }
}