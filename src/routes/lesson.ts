import { Router } from "express";
import { Lesson } from "../models";

const router = Router();

router
  .get("/", async (req, res, next) => {
    try {
      res.json(await Lesson.findAll());
    } catch (error) {
      next(error);
    }
  })
;

export default router;
