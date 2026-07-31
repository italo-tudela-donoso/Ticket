import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { createHash } from '../utils.js';
import userModel from '../models/user.model.js';
import { signToken, isValidPassword } from '../utils.js';

const registerConfig = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
    session: false
};

const loginConfig = {
    usernameField: 'email',
    passwordField: 'password',
    session: false
};

export async function registerCallback(req, username, password, done) {
    try {
        const { firstName, lastName } = req.body;
        const hashedPassword = await createHash(password);
        const user = await userModel.create({ email: username, password: hashedPassword, firstName, lastName });
        done(null, user);
    } catch (error) {
        if (error.code === 11000) {
            done(error, false);
        } else {
            done(error.message, false);
        }
    }
}

export async function loginCallback(username, password, done) {
    try {
        const user = await userModel.findOne({ email: username });
        if (user==null) done(null,false);

        if (await isValidPassword(password, user.password)) {
            const sessionData = {
                email: user.email,
                role: user.role ,
                firstName: user.firstName,
                lastName: user.lastName
            }
            const token = signToken(sessionData);
            done(null, token);
        }else {
            done(null, false);
        }
        }catch (error) {
        done(error, false);
    }
    }   

export async function initializePassport() {
        passport.use('register', new LocalStrategy(registerConfig, registerCallback));
        passport.use('login', new LocalStrategy(loginConfig, loginCallback));
    }