import { Schema, Document, model } from "mongoose";
import { ILesson } from "../../lib/models";

interface LessonModel extends ILesson, Document {

}

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  idTrainer: {
    type: Number,
    required: true,
  },
});

const Lesson = model<LessonModel>("Lessons", schema);

export default Lesson;
