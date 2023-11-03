import { Router } from "express";
import * as pedidoController from '../controllers/pedidos.controller.js'
import {verificarJWT}  from '../middlewares/auth.middleware.js';

const pedidosRouter = Router()

pedidosRouter.post("/", verificarJWT ,pedidoController.createPedido);
pedidosRouter.get("/", verificarJWT, pedidoController.getPedidos);
pedidosRouter.get("/pedido/:id",verificarJWT, pedidoController.getByIdPedido);
pedidosRouter.delete("/delete/:id",verificarJWT, pedidoController.deleteLogicoPedido);
pedidosRouter.put("/update/:id",verificarJWT, pedidoController.updateCompletoPedido);
pedidosRouter.patch("/parcialUpdate/:id",verificarJWT, pedidoController.updateParcialPedido)

export default pedidosRouter;
