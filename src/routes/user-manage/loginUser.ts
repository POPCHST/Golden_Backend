import { Router } from 'express';
import { loginUser } from '../../controllers/user-manage/loginUser'; 
const router = Router();

router.post('/loginuser', loginUser);

export default router;
