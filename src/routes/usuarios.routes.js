import { Router } from "express";
import { crearUsuario, listarUsuarios, login } from "../controllers/usuarios.controllers.js";
import { editarProducto } from "../controllers/porductos.controllers.js";

const router = Router();

router.route('/').get(listarUsuarios).post(crearUsuario);
router.route('/nuevo').post(login);

export default router;