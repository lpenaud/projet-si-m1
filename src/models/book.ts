import { Schema, Document, model } from "mongoose";

export interface Book {
    title: string;
    author: string;
    genre: string;
}

export interface BookModel extends Book, Document {

}

const schema = new Schema({
    titre: {
        required: true,
        type: String,
    },
    auteur: {
        required: true,
        type: String,
    },
    genre: String
});

const book = model<BookModel>("Livre", schema);

export default book;
