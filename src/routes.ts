import { Router } from 'express';
import { UserController } from './controller/User.controller';
import { validateLogin } from './middleware/validate.login.middleware';

const router = Router();

const User = new UserController();

router.post('/login', User.login);
router.post('/user', User.handle);

router.use(validateLogin);

router.get('/user', User.findAllUserController);

export default router;