import { Router } from 'express';
import { loginUser, signUser, userlog } from '../../controllers/user-manage/loginUser'; 
const router = Router();

router.post('/loginuser', loginUser);
router.post('/signuser', signUser);

router.post('/loguser', userlog);

export default router;
