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
  database: mariaConfig.database,
  username: mariaConfig.username,
  password: mariaConfig.password,
  host: mariaConfig.host,
  port: mariaConfig.port,
});

setupMaria(sequelize);
connect(createMongoUrl(mongoConfig), { useNewUrlParser: true });

export {
  Learner,
  Trainer
}
