import { Table, Model, Column, Is } from "sequelize-typescript";
import { validateEmail } from "../helpers/models";

@Table
export default class Learner extends Model<Learner> {

  @Column({
    allowNull: true,
  })
  name: string;

  @Column({
    allowNull: true,
  })
  lastName: string;

  @Is(validateEmail)
  @Column({
    allowNull: true,
    unique: true,
  })
  email: string;
}
