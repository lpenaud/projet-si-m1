import { Router } from "express";
import { checkFields } from "../helpers/routes";
import { IModule } from "../../lib/models";
import MissingFieldsError from "../helpers/http-error/missing-fields";
import { Module } from "../models";

const router = Router();
const mainModule = new Module();

router
  .get("/", async (req, res, next) => {
    try {
      const models = await mainModule.match();
      res.json(models.map(m => m.name));
    } catch (error) {
      next(error);
    }
  })
  .get<Pick<IModule, "name">>("/:name", async (req, res, next) => {
    try {
      res.json((await new Module(req.params.name).matchSubmodule()).map(m => m.name));
    } catch (error) {
      next(error);
    }
  })
  .put<Pick<IModule, "name">, {}, Pick<IModule, "name">>("/:name/submodules", (req, res, next) => {
    try {
      const missing = checkFields(req.body, "name");
      if (missing.length > 0) {
        throw new MissingFieldsError(missing);
      }
      new Module(req.params.name).addSubmodule(new Module(req.body.name));
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  })
;

export default router;
