import Learner from "./learner";
import { Sequelize } from "sequelize-typescript";
import { connect } from "mongoose";
import Trainer from "./trainer";
import { mariaConfig, mongoConfig } from "../config";
import { setupMaria, createMongoUrl } from "./helpers";

const sequelize = new Sequelize({
  dialect: "mariadb",
  models: [
    Learner,
    Trainer
  ],
  ...mariaConfig
});

setupMaria(sequelize);
connect(createMongoUrl(mongoConfig), { useNewUrlParser: true });

export {
  Learner,
  Trainer
}
