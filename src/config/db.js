import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default mongoose
  .connect("mongodb://127.0.0.1:27017")
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.error("Error conectando base de datos: ", err));
