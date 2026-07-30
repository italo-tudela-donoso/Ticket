import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    firstName: { type: String },
    lastName:  { type: String },
    name:      { type: String },
    email:     { type: String, required: true, unique: true, lowercase: true, 
                match: [
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    "Por favor ingrese un correo electrónico válido"
                ]},
    password:  { type: String, required: true },
    role:      { type: String, enum: ['user', 'admin', 'organizer'], default: 'user' },
})      

const userModel = model('user', userSchema);

export default userModel;
