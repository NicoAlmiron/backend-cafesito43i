import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
    nombreUsuario: { type: String, required: true, minLength: 2, maxLength: 50 },
    email: { type: String, unique: true, required: true, minLength: 2, maxLength: 50 },
    password: { type: String, required: true, minLength: 2, maxLength: 20 }
})


const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;