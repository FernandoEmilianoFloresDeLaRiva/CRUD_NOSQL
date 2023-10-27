import { Router } from "express";
import {
  getProductos,
  createProductos,
  updatePartialProduct,
  updateProduct,
  deleteLogico,
  deleteFisico,
} from "../controllers/productos.controller.js";
import { verificarJWT } from "../middlewares/auth.middleware.js";

const productosRouter = Router();

productosRouter.get("/:offset", getProductos);
productosRouter.post("/", verificarJWT, createProductos);
productosRouter.patch("/parcialUpdate/:id", verificarJWT, updatePartialProduct);
productosRouter.put("/update/:id", verificarJWT, updateProduct);
productosRouter.delete("/deleteLogico/:id", verificarJWT, deleteLogico);
productosRouter.delete("/deleteFisico/:id", verificarJWT, deleteFisico);

export default productosRouter;
