import { HttpError } from "./error";
import { IBook } from "../../../lib/models";
import { connect } from "./config";

const connection = connect({
    baseURL: "/IBook",
});

export async function getBooks(): Promise<Array<IBook>> {
    const res = await connection.get<IBook[]>("/");
    if (res.status > 300) {
        throw new HttpError(res);
    }
    return res.data;
}

export async function createBook(IBook: IBook): Promise<IBook> {
    const res = await connection.post<IBook>("/", IBook);
    if (res.status > 300) {
        throw new HttpError(res);
    }
    return res.data;
}

export async function deleteBook(id: string): Promise<void> {
    const res = await connection.delete(`/${id}`);
    if (res.status > 300) {
        throw new HttpError(res);
    }
}

export async function getBook(id: string): Promise<IBook> {
    const res = await connection.get<IBook>(`/${id}`);
    if (res.status > 300) {
        throw new HttpError(res);
    }
    return res.data;
}
