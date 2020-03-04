import { Table, Model, Column, AutoIncrement, PrimaryKey, Unique, NotNull, DataType, IsEmail, AllowNull } from "sequelize-typescript";
import { ILearner } from "../../../lib/models";

@Table({
  charset: "utf8",
  timestamps: false,
})
export default class Learner extends Model<Learner> implements ILearner {

  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @NotNull
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @NotNull
  @Column(DataType.STRING)
  lastName: string;


  @AllowNull(false)
  @NotNull
  @Unique
  @IsEmail
  @Column(DataType.STRING)
  email: string;
}
