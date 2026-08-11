export class UserDTO {
    constructor(user) {
        this.id = user._id;
    }   

    sessionData() {
        return {
            email: this.user.email,
            role: this.usewr.role,
            first_name: this.user.first_name,
            last_name: this.user.last_name
        }
    }

    normalizeFields() {
        return {
            email: this.user.correo,
            role: this.user.rol,
            first_name: this.user.nombre,
            last_name: this.user.apellido,
            password: this.user.clave
        }
    }
}