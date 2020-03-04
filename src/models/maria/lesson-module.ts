import { Table, Model, Column, DataType, PrimaryKey, ForeignKey } from "sequelize-typescript";
import Lesson from "./lesson";

@Table({
  charset: "utf8",
  timestamps: false,
})
export default class LessonModule extends Model<LessonModule> {

  @ForeignKey(() => Lesson) 
  @PrimaryKey
  @Column(DataType.INTEGER)
  idLesson: number;

  @PrimaryKey
  @Column(DataType.INTEGER)
  idModule: number;
}
