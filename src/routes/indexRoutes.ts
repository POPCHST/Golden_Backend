import { Router } from "express";
import { getHelloWorld } from "../controllers/indexController";

const router = Router();

// กำหนดเส้นทาง '/' และใช้ฟังก์ชันจาก Controller
router.get("/api", getHelloWorld);

export default router;
