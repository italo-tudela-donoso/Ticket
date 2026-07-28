import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { hash, compare, genSalt } from 'bcrypt';

export const __dirname = dirname(fileURLToPath(import.meta.url));

export async function createHash(password) {
    return await hash(password, await genSalt(10));

}

export async function isValidPassword(password, hashedPassword) {
    return await compare(password, hashedPassword);
}

//const password = 'myPassword123';
//const hashedPassword = await hashPassword(password);
//
//console.log(hashedPassword); // Muestra el hash generado
//console.log(await isValidPassword(password, hashedPassword)); // true
