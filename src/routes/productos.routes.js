import { Router } from "express";
import { listarProductos } from "../controllers/porductos.controllers.js";

const router = Router();

router.route('/producto').get(listarProductos);

export default router;