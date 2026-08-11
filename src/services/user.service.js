import { userRepository } from '../repository/index.js';

export async function getAllUsersService(req, res) {
    const users = await userRepository.findAll();

    return users.map(user => {

        const userData = user.toObject();

        delete userData.password;

        return userData;

    }   );
}

export async function getUserService(req) {
    const user = await userRepository.findById(req.params.uid); 

    if (!user) throw new Error('Usuario no encontrado');

    const userData = user.toObject();
    delete userData.password;
    return userData;    
}

export async function updateUserService(req) {
    const user = await userRepository.updateUser(req.params.uid, req.body);

    if (!user) { throw new Error('Usuario no encontrado');        }

    const userData = user.toObject();
    delete userData.password;
    return userData;    
}






   

