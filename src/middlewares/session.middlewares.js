import { userRepository } from '../repository/index.js';
import jwt from 'jsonwebtoken';
import { verifyToken } from '../utils.js';
import e from 'express';

export async function userExists(req, res, next) {
    try {
            const { email } = req.body;
            const user = await userRepository.findUserByEmail(email);
            if (!user)  {
                return res.status(401).json({ message: 'Usuario no encontrado' });
            }
            req.user = user;
            next();
        } catch (error) {
            res.status(500).json({ message: 'userExists' + error.message });    
        }
}

export async function validToken(req, res, next) {
     try {
           const { jwt } = req.signedCookies;
           const token = verifyToken(jwt);
           req.user = token;
           next();
       } catch (error) {
           res.status(500).json({ message: 'validToken' + error.message });
       } 
    }

export function autorizedRoles ( roles = []) {
    return async function (req, res, next) {
        try {
            if (!roles.includes(req.user.role)) {
                return res.status(403).json({ message: 'No tienes permiso para realizar esta acción' });
            }   
            next();
        } catch (error) {
            res.status(500).json({ message: 'autorizedRoles' + error.message });
        }
    }
}  