import {Router} from 'express'
import {login, register, current} from '../controllers/session.controller.js';
import { userExists,validToken } from '../middlewares/session.middlewares.js';


const router = Router()

router.post('/register', register);
router.post('/login', userExists, login);
router.get('/current', validToken, current);


export default router;

