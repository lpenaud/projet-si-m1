import { Router } from "express";
import { Dictionary, IdParam, checkFields, objectIdParamRegex } from "../helpers/routes";
import { Lesson, Trainer } from "../models";
import { ILesson } from "../../lib/models";
import MissingFieldsError from "../helpers/http-error/missing-fields";
import UnknownIdError from "../helpers/http-error/unknown-id";

const router = Router();

router
  .get("/", async (req, res, next) => {
    try {
      res.json(await Lesson.find());
    } catch (error) {
      next(error);
    }
  })
  .put<IdParam, {}, Partial<Omit<ILesson, "_id">>>(objectIdParamRegex, async (req, res, next) => {
    try {
      await Lesson.updateOne({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  })
  .delete<IdParam>(objectIdParamRegex, async (req, res, next) => {
    try {
      await Lesson.deleteOne({ _id: req.params.id });
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  })
  .post<Dictionary, {}, Omit<ILesson, "_id">>("/", async (req, res, next) => {
    try {
      const missing = checkFields(req.body, "idTrainer", "name");
      if (missing.length > 0) {
        throw new MissingFieldsError(missing);
      }
      const trainer = await Trainer.findOne({ where: { id: req.body.idTrainer } });
      if (!trainer) {
        //
        throw new UnknownIdError(req.body.idTrainer, "trainer");
      }
      const lesson = await Lesson.create(req.body);
      res.status(201).json(lesson);
    } catch (error) {
      next(error);
    }
  })
;

export default router;
