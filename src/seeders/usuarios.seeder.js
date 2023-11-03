import dotenv from "dotenv";
import bcrypt from "bcrypt";
import Usuario from "../models/usuario.model.js";
import db from "../config/db.js";
import mongoose from "mongoose";
dotenv.config();

const saltosBcrypt = parseInt(process.env.SALTOS_BCRYPT) || 123;
const usuarios = [
  {
    nombre: "nombre1",
    email: "email1@gmail.com",
    password: bcrypt.hashSync("1234", saltosBcrypt),
  },
  {
    nombre: "nombre2",
    email: "email2@gmail.com",
    password: bcrypt.hashSync("1234", saltosBcrypt),
  },
  {
    nombre: "nombre3",
    email: "email3@gmail.com",
    password: bcrypt.hashSync("1234", saltosBcrypt),
  },
  {
    nombre: "nombre4",
    email: "email4@gmail.com",
    password: bcrypt.hashSync("1234", saltosBcrypt),
  },
  {
    nombre: "nombre5",
    email: "email5@gmail.com",
    password: bcrypt.hashSync("1234", saltosBcrypt),
  },
  {
    nombre: "nombre6",
    email: "email6@gmail.com",
    password: bcrypt.hashSync("1234", saltosBcrypt),
  },
  {
    nombre: "nombre7",
    email: "email7@gmail.com",
    password: bcrypt.hashSync("1234", saltosBcrypt),
  },
  {
    nombre: "nombre8",
    email: "email8@gmail.com",
    password: bcrypt.hashSync("1234", saltosBcrypt),
  },
  {
    nombre: "nombre9",
    email: "email9@gmail.com",
    password: bcrypt.hashSync("1234", saltosBcrypt),
  },
  {
    nombre: "nombre10",
    email: "email10@gmail.com",
    password: bcrypt.hashSync("1234", saltosBcrypt),
  },
];

Usuario.deleteMany({})
  .then(() => {
    return Usuario.insertMany(usuarios);
  })
  .then(() => {
    console.log("usuarios creados");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log("error creando usuarios", error);
    mongoose.connection.close();
  });
