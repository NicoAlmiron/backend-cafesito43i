import { Router } from "express";
import { crearProducto, editarProducto, eliminarProducto, listarProductos, obtenerProducto } from "../controllers/productos.controllers.js";

const router = Router();

router.route('/producto').get(listarProductos).post(crearProducto);
router.route('/producto/:id').put(editarProducto).delete(eliminarProducto).get(obtenerProducto);

export default router;