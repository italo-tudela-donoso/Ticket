import { getAllUsersService, getUserService, updateUserService } from '../services/user.service.js'

export async function getAll(req, res) {
    try {
        const users = await getAllUsersService(req, res);
        
        return res.status(200).json({
            status: "success",
            payload: users
        });

    } catch (error) {
        res.status(500).json({ status: 'error', error: error.message})
    }
}

export async function getUser(req, res) {
    try {
        const user = await getUserService(req, res);    

        return res.status(200).json({
            status: "success",
            payload: user
        }); 
    } catch (error) {   
        return res.status(500).json({ status: 'error', error: error.message});
    }
}


export async function createUser(req, res) {
    try {
        const { name, email } = req.body  
        const newUser = new User({ name, email })
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario' })
    }   
}

export async function updateUser(req, res) { 
    try {
        const user = await updateUserService(req, res);
        return res.status(200).json({
            status: "success",
            payload: user
        });
    } catch (error) {
        return res.status(500).json({ status: 'error', error: error.message});
    }   
}


