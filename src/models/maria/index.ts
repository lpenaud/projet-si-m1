import { Sequelize } from "sequelize-typescript";
import { timezone, mariaConfig } from "../../config";
import { setupMaria } from "../../helpers/models";
import Learner from "./learner";
import Lesson from "./lesson";
import Trainer from "./trainer";
import LessonModule from "./lesson-module";

const sequelize = new Sequelize({
  dialect: "mariadb",
  models: [
    Learner,
    Trainer,
    Lesson,
    LessonModule,

  ],
  dialectOptions: {
    timezone,
  },
  ...mariaConfig
});

setupMaria(sequelize);

export {
  Learner,
  Lesson,
  Trainer,
  LessonModule,
};
