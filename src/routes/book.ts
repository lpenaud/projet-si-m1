import { Router } from "express";
import { Book } from "../models";

const router = Router();

function iAmTeabot(res: any): void {
    res.status(418).send("I'm a teapot");
}

router
    .post('/', async (req, res) => {
        const { title, author, genre } = req.body;

        if (!title || !author) {
            res.status(422).send();
        }

        const book = new Book({
            title,
            author,
            genre
        });
        try {
            await book.save();
        } catch (error) {
            res.status(500).send();
            throw error;
        }
        res.json(book)
    })
    .get("/", async (req, res) => {
        const books = await Book.find();
        res.json(books);
    })
    .get("/:id", async (req, res) => {
        const { id } = req.params;
        try {
            const book = await Book.findById(id);
            res.json(book);
        } catch (error) {
            iAmTeabot(res);
            throw error;
        }
    })
    .delete('/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const removed = await Book.deleteOne({ _id: id });
            res.json(removed);
        } catch (error) {
            iAmTeabot(res);
            throw error;
        }
    })

export default router;
