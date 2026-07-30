import {Router} from 'express'
import {login, register, current} from '../controllers/session.controller.js';
import { userExists,validToken } from '../middlewares/session.middlewares.js';
import passport from 'passport';

const router = Router()

router.post('/register', 
    passport.authenticate('register', { session: false, passReqToCallback: true }),
    register
);
router.post('/login', 
    passport.authenticate('login', { session: false , passReqToCallback: true   }),
    //login
    async (req, res, next) => {
        res.cookie("jwt", req.user, {signed: true, httpOnly: true, maxAge: 3600000}).json({data: req.user}); 
        console.log(req.user);
    }
);
router.get('/current', validToken, current);


export default router;

