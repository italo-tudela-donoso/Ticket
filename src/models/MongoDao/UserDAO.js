import userModel from '../user.model.js';

class UserDAO { 
    async create(user) {
        return await userModel.create(user);    
    }

    async update(userId, update) {
        return await userModel.findByIdAndUpdate(userId, update);
    }

    async delete(userId) {
        return await userModel.findByIdAndDelete(userId);
    }

    async findOne(email) {
        return await userModel.findOne({ email });
    }
}

export default new UserDAO();
