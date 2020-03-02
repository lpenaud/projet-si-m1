import { Router } from "express";
import LearnerRouter from "./learner";
import TrainerRouter from "./trainer";
import LessonRouter from "./lesson";

const router = Router();
const startingTime = Date.now();

router
  .get("/", (req, res) => {
    res.json({
      up: true,
      startingTime,
    });
  })
  .use("/learner", LearnerRouter)
  .use("/trainer", TrainerRouter)
  .use("/lesson", LessonRouter)
;

export default router;
