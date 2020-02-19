import { Model } from "sequelize";
import { Table, Column, Is } from "sequelize-typescript";
import { validateEmail } from "../helpers/models";

@Table
export default class Trainer extends Model<Trainer> {
  @Column({
    allowNull: false,
  })
  name: string;

  @Column({
    allowNull: false,
  })
  lastName: string;

  @Is(validateEmail)
  @Column({
    unique: true,
    allowNull: false,
  })
  email: string;
}
