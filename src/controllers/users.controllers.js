export async function getUsers(req, res) {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios' })
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

export async function getUser(req, res) {

}

export async function updateUser(req, res) { }

export async function getAll(req, res) { }