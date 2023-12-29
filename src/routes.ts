import { Router } from 'express';
import { UserController } from './controller/User.controller';

const router = Router();

const User = new UserController();

router.post('/user', User.handle);
router.get('/user', User.findAllUserController);

export default router;