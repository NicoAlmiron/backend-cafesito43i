import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
    nombreUsuario: { type: String, required: true, maxLength: 50 },
    email: { type: String, unique: true, required: true, maxLength: 200 },
    password: { type: String, required: true }
})


const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;