import Book from "./book";
import { connect } from "mongoose";
import { mongoHostname, mongoPort, mongoDb } from "../config";

connect(`mongodb://${mongoHostname}:${mongoPort}/${mongoDb}`, { useNewUrlParser: true });

export {
    Book,
}
