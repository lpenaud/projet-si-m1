import { Router } from "express";
import { Learner } from "../models";
import { ILearner } from "../../lib/models";
import { Dictionary, IdParam, checkFields, idParamRegex } from "../helpers/routes";
import MissingFieldsError from "../helpers/http-error/missing-fields";

const router = Router();

router
  .get("/", async (req, res, next) => {
    try {
      res.json(await Learner.findAll());
    } catch (error) {
      next(error);
    }
  })
  .put<IdParam, {}, Partial<Omit<ILearner, "id">>>(idParamRegex, async (req, res, next) => {
    try {
      await Learner.update(req.body, {
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
      await Learner.destroy({
        where: {
          id: Number(req.params.id)
        }
      });
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  })
  .post<Dictionary, {}, Omit<ILearner, "id">>("/", async (req, res, next) => {
    const missing = checkFields(req.body, "email", "lastName", "name");
    if (missing.length > 0) {
      next(new MissingFieldsError(missing));
      return;
    }
    try {
      const learner = await Learner.create(req.body);
      res.status(201).json(learner);
    } catch (error) {
      next(error);
    }
  })
;

export default router;
