import userModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export async function userExists(req, res, next) {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    if (user== null) res.status(404).json({ message: 'No existe Usuario' });
    req.user = user;
    next();
}

export async function validToken(req, res, next) {
     try {
           const token = jwt.verify(req.query.token, 'c13C13');
           if (!token) {
               return res.status(401).json({ error: 'Token no proporcionado' });
           }
           req.userJWT = token;
           next();

       } catch (error) {
           res.status(500).json({ error:error});
       } 
    }