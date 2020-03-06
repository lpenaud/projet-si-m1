import { Router } from "express";
import { Lesson } from "../models";
import { idParamRegex, IdParam, checkFields, idExpressRegex } from "../helpers/routes";
import { ILesson, IModule } from "../../lib/models";
import MissingFieldsError from "../helpers/http-error/missing-fields";
import { Module } from "../models";

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
  .put<IdParam, {}, IModule>(`/:id(${idExpressRegex})/modules`, async (req, res, next) => {
    try {
      const missing = checkFields(req.body, "name");
      if (missing.length > 0) {
        throw new MissingFieldsError(missing);
      }
      const module = new Module(req.body.name);
      await module.create();
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  })
;

export default router;
