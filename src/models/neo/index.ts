import Neode = require("neode");
import { WithOptional } from "../../../lib/utils";
import { IModule } from "../../../lib/models";
import { neoConfig } from "../../config";
import SchemaModule from "./module";

const neode = new Neode(
  `${neoConfig.protocol}://${neoConfig.host}:${neoConfig.port}`,
  neoConfig.username,
  neoConfig.password,
  neoConfig.enterprise
);
neode.with({
  Module: SchemaModule, 
});

export const Module = neode.model<WithOptional<IModule, "id">>("Module", SchemaModule);
