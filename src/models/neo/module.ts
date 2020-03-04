import { IModule } from "../../../lib/models";
import { Neo4jModel } from "../../helpers/models";

const schemaModule: Neo4jModel<IModule> = {
  id: {
    type: "number",
    primary: true,
  },
  name: "string",
  submodules: {
    type: "relationships",
    target: "Module",
    relationship: "SUBMODULES",
    direction: "out",
    properties: {
      name: "string",
    },
  },
};

export default schemaModule;
