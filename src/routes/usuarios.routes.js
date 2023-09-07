import { Router } from "express";
import { crearUsuario, listarUsuarios, login } from "../controllers/usuarios.controllers.js";

const router = Router();

router.route('/').get(listarUsuarios).post(login);
router.route('/nuevo').post(crearUsuario);

export default router;