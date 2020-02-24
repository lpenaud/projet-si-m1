import { Table, Column, AutoIncrement, PrimaryKey, NotNull, Unique, Model, DataType, IsEmail, AllowNull } from "sequelize-typescript";
import { ITrainer } from "../../lib/models";

@Table({
  charset: "utf8",
  timestamps: false,
})
export default class Trainer extends Model<Trainer> implements ITrainer {

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
  @IsEmail
  @Unique
  @Column(DataType.STRING)
  email: string;
}
