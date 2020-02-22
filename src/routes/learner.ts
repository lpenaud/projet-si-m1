import { Router } from "express";
import { Learner } from "../models";
import { ILearner } from "../../lib/models";
import { ParamsDictionary, createCheckFieldMiddleware, IdParam } from "./helpers";

const router = Router();

router
  .get("/", async (req, res, next) => {
    try {
      res.json(await Learner.findAll());
    } catch (error) {
      next(error);
    }
  })
  .put<IdParam, Partial<Omit<ILearner, "id">>>("/:id(/d+/)", async (req, res, next) => {
    try {
      await Learner.update(req.body, {
        where: {
          id: Number(req.params.id)
        }
      });
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  })
  .use("/", createCheckFieldMiddleware("email", "lastName", "name"))
  .post<ParamsDictionary, {}, Omit<ILearner, "id">>("/", async (req, res, next) => {
    try {
      const learner = Learner.create(req.body);
      res.status(201).json(learner)
    } catch (error) {
      next(error);
    }
  })
;

export default router;
