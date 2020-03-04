import { Router } from "express";
import { Lesson, Module } from "../models";
import { idParamRegex, IdParam, checkFields, idExpressRegex } from "../helpers/routes";
import { ILesson } from "../../lib/models";
import MissingFieldsError from "../helpers/http-error/missing-fields";
import LessonModule from "../models/maria/lesson-module";

const router = Router();

router
  .get("/", async (req, res, next) => {
    try {
      res.json(await Lesson.findAll(({
        attributes: [
          "id",
          "name",
        ]
      })));
    } catch (error) {
      next(error);
    }
  })
  .patch<IdParam, {}, Omit<ILesson, "id">>(idParamRegex, async (req, res, next) => {
    const missing = checkFields(req.body, "name");
    if (missing.length > 0) {
      next(new MissingFieldsError(missing));
    }
    try {
      Lesson.update(req.body, {
        where: {
          id: req.params.id
        }
      });
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  })
  .put<IdParam & { idModule: number }, {}, {}>(`/:id(${idExpressRegex})/modules/:idModule(${idExpressRegex})`, async (req, res, next) => {
    try {
      const module = await Module.find(Number(req.params.idModule));
      if (module) {
        throw new Error("Module doesn't exist");
      }
      const lessonModule = new LessonModule({
        idModule: module.properties().id,
        idLesson: Number(req.params.id),
      });
      await lessonModule.save();
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  })
;

export default router;
