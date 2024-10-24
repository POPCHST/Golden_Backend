import { Router } from "express";
import { getCourse } from "../controllers/courseController";

const router = Router();

router.get('/courseList', getCourse);

export default router;
