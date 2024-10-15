import { Router } from 'express';
import { getProduct } from '../controllers/productController';

const router = Router();

// กำหนดเส้นทาง '/' และใช้ฟังก์ชันจาก Controller
router.get('/products', getProduct);

export default router;
