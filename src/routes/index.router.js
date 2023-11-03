import { Router } from "express";
import productosRouter from "./productos.router.js";
import pedidosRouter from "./pedidos.router.js";
import usuarioRouter from "./usuarios.router.js";

const indexRouter = Router();

const prefijo = "/api";

indexRouter.get(prefijo, (req, res) => {
  res.send("Bienvenido a mi API").status(200);
});

indexRouter.use(`${prefijo}/productos`, productosRouter);
indexRouter.use(`${prefijo}/pedidos`, pedidosRouter)
indexRouter.use(`${prefijo}/usuarios`, usuarioRouter)

export default indexRouter;
