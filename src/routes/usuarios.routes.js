import { Router } from "express";
import { crearUsuario, listarUsuarios } from "../controllers/usuarios.controllers.js";
import { editarProducto } from "../controllers/porductos.controllers.js";

const router = Router();

router.route('/usuario').get(listarUsuarios).post(crearUsuario);
router.route('/usuario/:id').put();

export default router;