import { isValidPassword, signToken } from '../utils.js';

export async function register(req, res, next) { 
    res.status(201).json({ message: "usuario creado exitosamente", user: req.user })
}

export async function login(req, res, next) {
    try {

        const { user } = req;

        const { email, password } = req.body;

        if (await isValidPassword(password, user.password)) {
            console.log("login Valid Password");
            const sessionData = {
                email: user.email,
                role: user.role 
            }

            const token = signToken(sessionData);
            res.cookie("jwt", token, {signed: true, httpOnly: true, maxAge: 3600000}).status(200).json(token ); // 1 hora

        }
            
        else {
            console.log("login NOT Valid Password");
            res.status(401).json({ error: 'Credenciales inválidas' });
        }
    } catch (error) {
        console.log("login Error catched:"+error.message);
        res.status(401).json({ error: error.message });
    }
}

export async function current(req, res, next) {
    try {
        res.status(200).json({ data: req.userJWT });
    } catch (error) {
        res.status(500).json({ error:error});
    } 
}