import userModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import { verifyToken } from '../utils.js';
import e from 'express';

export async function userExists(req, res, next) {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    if (user== null) res.status(401).json({ message: 'No existe Usuario' });
    req.user = user;
    next();
}

export async function validToken(req, res, next) {
     try {
           const { jwt } = req.signedCookies;
           const token = verifyToken(jwt);
           req.user = token;
           next();
       } catch (error) {
           res.status(500).json({ error:error});
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
            res.status(500).json({ error:error});
        }
    }
}  