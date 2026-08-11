import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { createHash } from '../utils.js';
import { userRepository } from '../repository/index.js';

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
        const user = await userRepository.createUser({ email: username, password: hashedPassword, firstName, lastName });
        return done(null, user);
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
        const user = await userRepository.findUserByEmail(username);
        if (user==null) return done(null,false);

        if (await isValidPassword(password, user.password)) {
            const sessionData = {
                email: user.email,
                role: user.role ,
                firstName: user.firstName,
                lastName: user.lastName
            }
            const token = signToken(sessionData);
            return done(null, token);
        }else {
            return done(null, false);
        }
        }catch (error) {
        return done(error, false);
    }
    }   

export async function initializePassport() {
        passport.use('register', new LocalStrategy(registerConfig, registerCallback));
        passport.use('login', new LocalStrategy(loginConfig, loginCallback));
    }