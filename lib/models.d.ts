export interface Book {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _id: any;
    title: string;
    author: string;
    genre?: string;
}
