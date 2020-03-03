import { Router } from "express";
import { Trainer, Lesson } from "../models";
import { ITrainer, ILesson } from "../../lib/models";
import { Dictionary, IdParam, checkFields, idParamRegex, idExpressRegex } from "../helpers/routes";
import MissingFieldsError from "../helpers/http-error/missing-fields";

const router = Router();

router
  .get("/", async (req, res, next) => {
    try {
      res.json(await Trainer.findAll());
    } catch (error) {
      next(error);
    }
  })
  .put<IdParam, {}, Partial<Omit<ITrainer, "id">>>(idParamRegex, async (req, res, next) => {
    try {
      await Trainer.update(req.body, {
        where: {
          id: Number(req.params.id)
        },
      });
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  })
  .delete<IdParam>(idParamRegex, async (req, res, next) => {
    try {
      await Trainer.destroy({
        where: {
          id: Number(req.params.id)
        }
      });
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  })
  .post<Dictionary, {}, Omit<ITrainer, "id">>("/", async (req, res, next) => {
    const missing = checkFields(req.body, "email", "lastName", "name");
    if (missing.length > 0) {
      next(new MissingFieldsError(missing));
      return;
    }
    try {
      const trainer = await Trainer.create(req.body);
      res.status(201).json(trainer);
    } catch (error) {
      next(error);
    }
  })
  .put<IdParam, {}, Omit<ILesson, "id">>(`/:id(${idExpressRegex})/lessons`, async(req, res, next) => {
    const missing = checkFields(req.body, "name");
    if (missing.length > 0) {
      next(new MissingFieldsError(missing));
      return;
    }
    try {
      const lesson = await Lesson.create({
        trainerId: Number(req.params.id),
        ...req.body
      });
      res.status(201).json(lesson);
    } catch (error) {
      next(error);
    }
  })
  .patch<{ id: string; idLesson: string }, {}, Partial<Omit<ILesson, "id">>>(`/:id(${idExpressRegex})/lessons/:idLesson(${idExpressRegex})`, async(req, res, next) => {
    try {
      await Lesson.update(req.body, {
        where: {
          id: Number(req.params.idLesson)
        },
      });
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  })
;

export default router;
