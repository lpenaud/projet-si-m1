import { Router } from "express";
import { checkFields } from "../helpers/routes";
import { IModule } from "../../lib/models";
import MissingFieldsError from "../helpers/http-error/missing-fields";
import { Module } from "../models";

const router = Router();

router
  .post<{}, {}, Omit<IModule, "id" | "submodules">>("/", async (req, res, next) => {
    try {
      const missing = checkFields(req.body, "name");
      if (missing.length > 0) {
        throw new MissingFieldsError(missing);
      }
      res.status(201).json(await Module.create(req.body));
    } catch (error) {
      next(error);
    }
  })
;

export default router;
