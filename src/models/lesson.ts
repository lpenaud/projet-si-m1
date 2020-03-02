import { Model, Table, AutoIncrement, PrimaryKey, Column, DataType, BelongsTo, AllowNull, NotNull, ForeignKey } from "sequelize-typescript";
import { ILesson, ITrainer } from "../../lib/models";
import { Trainer } from ".";

@Table({
  charset: "utf8",
  timestamps: false,
})
export default class Lesson extends Model<Lesson> implements ILesson {

  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;
  
  @AllowNull(false)
  @NotNull
  @Column(DataType.STRING)
  name: string;
  
  @ForeignKey(() => Trainer)
  @Column(DataType.INTEGER)
  trainerId: number;

  @BelongsTo(() => Trainer)
  trainer: ITrainer;
}