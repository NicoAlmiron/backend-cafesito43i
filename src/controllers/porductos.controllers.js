import Producto from "../models/producto.js";

export const listarProductos = (req, res) => {
    try {
        res.send('esto es un aprueba para ver')
    } catch (error) {
        console.log(error);
    }
}

export const crearProducto = async(req, res) => {
    try {
        // ir a la db y pedir los productos
        //aqui los datos deberian estar validados
        console.log(req.body);
        const productoNuevo = new Producto(req.body);
        //guardar producto nuevo en la db
        await productoNuevo.save();
        res.status(201).json({ mensaje: 'El producto fue creado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: "El producto no pudo ser creado, verificar los datos" });
    }
}