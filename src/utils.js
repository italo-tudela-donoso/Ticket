import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { hash, compare, genSalt } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { env } from './config/env.js';

export const __dirname = dirname(fileURLToPath(import.meta.url));

export async function createHash(password) {
    return await hash(password, await genSalt(10));
}

export async function isValidPassword(password, hashedPassword) {
    return await compare(password, hashedPassword);
}

export function signToken(data) {
    return jwt.sign(data, env.JWT_SECRET, { expiresIn: '1h' });
}

export function verifyToken(token) {
    return jwt.verify(token, env.JWT_SECRET);
}

