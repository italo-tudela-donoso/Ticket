class UserRepository {
    // Repository implementation
    constructor(UserDAO) {
        this.userDAO = UserDAO;
    }

    async findAll(){
        return await this.userDAO.find();
    }   

    async findById(userId) {
        return await this.userDAO.findById(userId);
    }   

    async findOne(email) {
        return await this.userDAO.findOne(email);
    }   

    async findByEmail(email) {
        return await this.userDAO.findByEmail(email);
    }   

    async createUser(userData) {
        return await this.userDAO.create(userData);
    }

    async updateUser(email, updateData) {
    
        const user = await this.userDAO.findByEmail(email);

        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        return await this.userDAO.update(user._id, updateData);   
    }

    async deleteUser(email) {
        const user = await this.userDAO.findByEmail(email); 
       
        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        return await this.userDAO.delete(user._id);
    }   
}

export default UserRepository;
