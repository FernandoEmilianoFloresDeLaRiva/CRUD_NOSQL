import pedidosModel from "../models/pedidos.model.js";
import mongoose from "mongoose";
import db from "../config/db.js";

const pedidos = [
  {
    id_entrega: 1,
    id_producto: 101,
    id_lugar: 200,
    fecha: "2023-11-10",
    id_horario: 3,
    total: 50,
    deleted: "N",
    Deleted_at: null,
    Created_at: null,
    Update_at: null,
  },
  {
    id_entrega: 2,
    id_producto: 102,
    id_lugar: 201,
    fecha: "2023-11-12",
    id_horario: 2,
    total: 75,
    deleted: "N",
    Deleted_at: null,
    Created_at: null,
    Update_at: null,
  },
  {
    id_entrega: 3,
    id_producto: 103,
    id_lugar: 202,
    fecha: "2023-11-15",
    id_horario: 1,
    total: 60,
    deleted: "N",
    Deleted_at: null,
    Created_at: null,
    Update_at: null,
  },
];

pedidosModel
  .insertMany(pedidos)
  .then(() => {
    console.log("Pedidos creados");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(error);
    mongoose.connection.close();
  });
