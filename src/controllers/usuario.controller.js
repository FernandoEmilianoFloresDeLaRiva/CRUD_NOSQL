import usuarioModel from "../models/usuario.model.js";
import bcrypt from "bcrypt";
const saltosBcrypt = parseInt(process.env.SALTOS_BCRYPT) || 123;

export const index = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const skip = (page - 1) * limit;

    const usuarios = await usuarioModel
      .find({ deleted: false })
      .skip(skip)
      .limit(limit);

    let response = {
      message: "se obtuvieron los usuarios correctamente",
      data: usuarios,
    };

    if (page && limit) {
      const totalUsuarios = await usuarioModel.countDocuments({
        deleted: false,
      });
      const totalPages = Math.ceil(totalUsuarios / limit);
      const currentPage = parseInt(page);

      response = {
        ...response,
        total: totalUsuarios,
        totalPages,
        currentPage,
      };
    }

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      message: "ocurrio un error al obtener los usuarios",
      error: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const email = req.body.email;

    const existing = await usuarioModel.findOne({ email: email });
    if (!existing) {
      let usuario = new usuarioModel({
        nombre: req.body.nombre,
        email,
        password: bcrypt.hashSync(req.body.password, saltosBcrypt),
      });
      await usuario.save();

      return res.status(201).json({
        message: "usuario creado exitosamente!",
      });
    } else {
      return res.status(409).json({
        message: "usuario ya existente",
        existing,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "falló al crear el usuario!",
      error: error.message,
    });
  }
};

export const deleteLogico = async (req, res) => {
  try {
    const usuarioId = req.params.id;
    const usuarioEliminado = await usuarioModel.findByIdAndUpdate(usuarioId, {
      deleted: true,
      deleted_at: new Date(),
    });

    if (!usuarioEliminado) {
      return res.status(404).json({
        message: "usuario no encontrado",
      });
    }

    return res.status(200).json({
      message: "usuario eliminado exitosamente",
    });
  } catch (error) {
    return res.status(500).send({
      message: "ocurrió un error al eliminar el usuario",
      error: error.message,
    });
  }
};

export const updateParcial = async (req, res) => {
  try {
    const usuarioId = req.params.id;
    const datosActualizar = {
      ...req.body,
      updated_at: new Date(),
    };

    const usuarioActualizado = await usuarioModel.findByIdAndUpdate(
      usuarioId,
      datosActualizar
    );

    if (!usuarioActualizado) {
      return res.status(404).json({
        message: "usuario no encontrado",
      });
    }

    return res.status(200).json({
      message: "usuario actualizado exitosamente",
    });
  } catch (error) {
    return res.status(500).json({
      message: "ocurrió un error al editar el usuario",
      error: error.message,
    });
  }
};

export const updateCompleto = async (req, res) => {
  try {
    const usuarioId = req.params.id;
    const datosActualizar = {
      ...req.body,
      updated_at: new Date(),
    };

    const usuarioActualizar = usuarioModel.findByIdAndUpdate(
      usuarioId,
      datosActualizar
    );

    if (!usuarioActualizar) {
      return res.status(404).json({
        message: "usuario no encontrado",
      });
    }

    return res.status(200).json({
      message: "usuario actualizado con exito",
    });
  } catch (error) {
    return res.status(500).json({
      message: "ocurrrio un error al actualizar el usuario",
      error: error.message,
    });
  }
};

export const deleteFisico = async (req, res) => {
  try {
    const usuarioId = req.params.id;

    const usuarioEliminado = usuarioModel.findByIdAndDelete(usuarioId);

    if (!usuarioEliminado) {
      return res.status(404).json({
        message: "este usuario no existe",
      });
    }

    return res.status(200).json({
      message: "usuario eliminado permanentemente",
    });
  } catch (error) {
    return res.status(500).json({
      message: "hubo un error al eliminar el usuario",
      error: error.message,
    });
  }
};
