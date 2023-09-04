import Producto from "../models/producto.js";

export const listarProductos = (req, res) => {
    try {
        res.send('esto es un aprueba')
    } catch (error) {
        console.log(error);
    }
}