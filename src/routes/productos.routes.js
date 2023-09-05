import { Router } from "express";
import { crearProducto, listarProductos } from "../controllers/porductos.controllers.js";

const router = Router();

router.route('/producto').get(listarProductos).post(crearProducto);
router.route('/producto/:id').put();

export default router;