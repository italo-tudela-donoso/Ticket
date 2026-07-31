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
console.log("Entró a getUsers");

    try {
        console.log(
            "Estado de MongoDB:",
            mongoose.connection.readyState
        );

        if (mongoose.connection.readyState !== 1) {
            return res.status(503).json({
                status: "error",
                error: "MongoDB no está conectado",
                mongoState: mongoose.connection.readyState
            });
        }

        const users = await userModel.find().lean();

        console.log("Usuarios encontrados:", users.length);

        return res.status(200).json({
            status: "success",
            payload: users
        });

    } catch (error) {
        console.error("Error en getUsers:", error);

        return res.status(500).json({
            status: "error",
            error: error.message
        });
    }
}

export async function updateUser(req, res) { }

export async function getAll(req, res) { 
     try {
        console.log("Entró a getAll");

        const users = await userModel
            .find({})
            .select("-password")
            .lean();

        console.log("Usuarios encontrados:", users.length);

        return res.status(200).json({
            status: "success",
            payload: users
        });

    } catch (error) {
        console.error("Error obteniendo usuarios:", error);

        return res.status(500).json({
            status: "error",
            error: error.message
        });
    }
}

