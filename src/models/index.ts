import Learner from "./learner";
import { Sequelize } from "sequelize-typescript";
import { connect } from "mongoose";
import Trainer from "./trainer";
import { mariaConfig, mongoConfig } from "../config";
import Book from "./book";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sequelize = new Sequelize({
    dialect: "mariadb",
    models: [
        Learner,
        Trainer
    ],
    ...mariaConfig
});

const l = new Learner({ name: "name", lastName: "lastname", email: "email@univ-brest.fr" });
l.save()

connect(`mongodb://${mongoConfig.hostname}:${mongoConfig.port}/${mongoConfig.database}`, { useNewUrlParser: true });

export {
    Book,
    Learner,
    Trainer
}
