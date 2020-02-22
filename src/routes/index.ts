import { Router } from "express";
import LearnerRouter from "./learner";

const router = Router();

router
  .get("/", (req, res) => {
    res.send("API is up");
  })
  .use("/learner", LearnerRouter)
;

export default router;
