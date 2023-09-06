import Producto from "../models/producto.js";

export const listarProductos = async(req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        console.log(error);
        response.status(404).json({ mensaje: 'Error al buscar el producto, no pudimos encontrarlo' });
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

export const editarProducto = async(req, res) => {
    try {
        // ir a la db y pedir los productos
        //aqui los datos deberian estar validados
        // extraer el parametro id de la ruta


        await Producto.findByIdAndUpdate(req.params.id, req.body);

        res.status(200).json({ mensaje: 'El producto fue editado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: "El producto no se puede editar" });
    }
}