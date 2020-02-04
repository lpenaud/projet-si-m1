import { Schema, Document, model } from "mongoose";

export interface Book {
    title: string;
    author: string;
    genre: string;
}

export interface BookModel extends Book, Document {

}

const schema = new Schema({
    title: {
        required: true,
        type: String,
    },
    author: {
        required: true,
        type: String,
    },
    genre: String
});

const Book = model<BookModel>("Livre", schema);

export default Book;
