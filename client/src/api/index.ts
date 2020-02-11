import { Book } from "../../../lib/models";
import axios from "axios";
import { HttpError } from "./error";

const connection = axios.create({
    baseURL: 'http://localhost:3048/api'
})

export async function getBooks(): Promise<Array<Book>> {
    const res = await connection.get("/book");
    if (res.status > 300) {
        throw new HttpError(res);
    }
    return res.data;
}