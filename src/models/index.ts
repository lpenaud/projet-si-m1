import { Sequelize } from "sequelize-typescript";
import { connect } from "mongoose";
import { mariaConfig, mongoConfig, timezone } from "../config";
import { setupMaria, createMongoUrl } from "../helpers/models";
import Learner from "./learner";
import Trainer from "./trainer";
import Lesson from "./lesson";

const sequelize = new Sequelize({
  dialect: "mariadb",
  models: [
    Learner,
    Trainer
  ],
  dialectOptions: {
    timezone,
  },
  ...mariaConfig
});

setupMaria(sequelize);
connect(createMongoUrl(mongoConfig), { useNewUrlParser: true, useUnifiedTopology: true });

export {
  Learner,
  Trainer,
  Lesson,
};
