import { HttpError } from "./error";
import { Book } from "../../../lib/models";
import { connect } from "./config";

const connection = connect({
    baseURL: "/book",
});

export async function getBooks(): Promise<Array<Book>> {
    const res = await connection.get<Book[]>("/");
    if (res.status > 300) {
        throw new HttpError(res);
    }
    return res.data;
}

export async function createBook(book: Book): Promise<Book> {
    const res = await connection.post<Book>("/");
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

export async function getBook(id: string): Promise<Book> {
    const res = await connection.get<Book>(`/${id}`);
    if (res.status > 300) {
        throw new HttpError(res);
    }
    return res.data;
}
