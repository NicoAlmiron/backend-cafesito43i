import Usuario from "../models/usuario.js";

export const listarUsuarios = async(req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        response.status(404).json({ mensaje: 'Error al buscar el producto, no pudimos encontrarlo' });
    }
}

export const crearUsuario = async(req, res) => {
    try {
        console.log(req.body);
        const usuarioNuevo = new Usuario(req.body);
        await usuarioNuevo.save();
        res.status(201).json({ mensaje: 'El producto fue creado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: "El producto no pudo ser creado, verificar los datos" });
    }
}