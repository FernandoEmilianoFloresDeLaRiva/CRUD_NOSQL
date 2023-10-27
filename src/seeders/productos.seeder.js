import productoModel from "../models/productos.model.js";
import mongoose from "mongoose";

const arregloDeProductos = [
  {
    Prod_Name: "Producto 1",
    Price: 10.99,
    Width: 5.5,
    Height: 8.2,
    Colour: "Rojo",
    Images: "imagen1.jpg",
    state_delete: false,
    Delete_at: null,
    Created_at: new Date(),
    Update_at: null,
  },
  {
    Prod_Name: "Producto 2",
    Price: 20.49,
    Width: 6.1,
    Height: 7.8,
    Colour: "Azul",
    Images: "imagen2.jpg",
    state_delete: false,
    Delete_at: null,
    Created_at: new Date(),
    Update_at: null,
  },
  {
    Prod_Name: "Producto 3",
    Price: 15.75,
    Width: 4.9,
    Height: 9.0,
    Colour: "Verde",
    Images: "imagen3.jpg",
    state_delete: false,
    Delete_at: null,
    Created_at: new Date(),
    Update_at: null,
  },
  {
    Prod_Name: "Producto 4",
    Price: 12.99,
    Width: 7.0,
    Height: 6.5,
    Colour: "Amarillo",
    Images: "imagen4.jpg",
    state_delete: false,
    Delete_at: null,
    Created_at: new Date(),
    Update_at: null,
  },
  {
    Prod_Name: "Producto 5",
    Price: 19.99,
    Width: 5.3,
    Height: 7.5,
    Colour: "Morado",
    Images: "imagen5.jpg",
    state_delete: false,
    Delete_at: null,
    Created_at: new Date(),
    Update_at: null,
  },
];

productoModel
  .insertMany(arregloDeProductos)
  .then(() => {
    console.log("Productos creados");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(error);
    mongoose.connection.close();
  });
