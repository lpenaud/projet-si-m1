import { Router } from "express";
import LearnerRouter from "./learner";

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
;

export default router;
