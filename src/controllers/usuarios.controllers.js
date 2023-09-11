import Usuario from "../models/usuario.js";
import bcrypt from 'bcrypt'

//verificar si existe el email
//verificar si el usuario que necontre tiene la misma contraseña que recibi en body
export const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        let usuario = await Usuario.findOne({ email });
        if (!usuario) {
            //si existe 
            return res.status(400).json({
                mensaje: "correo o password invalidos - correo"
            });
        }


        const passwordValido = bcrypt.compareSync(password, usuario.password)
        if (!passwordValido) {
            return res.status(400).json({ mensaje: "correo o password invalidos - password" });
        }

        res.status(200).json({
            mensaje: "el usuario existe",
            uid: usuario._id,
            nombre: usuario.nombreUsuario
        });

    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'Error al buscar usuario' });
    }
}

export const listarUsuarios = async(req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        response.status(404).json({ mensaje: 'Error al buscar los usuarios, no pudimos encontrarlos' });
    }
}

export const crearUsuario = async(req, res) => {
    try {
        const { email, password } = req.body;
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({ mensaje: 'ya esxiste un usuario con el correo envieado' });
        }
        usuario = new Usuario(req.body);

        const salt = bcrypt.genSaltSync(10);

        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();
        res.status(201).json({ mensaje: 'El usuario fue creado correctamente', nombre: usuario.nombreUsuario, uid: usuario._id });
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: "El producto no pudo ser creado, verificar los datos" });
    }
}