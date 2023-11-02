import productoModel from "../models/productos.model.js";

export const getProductos = (req, res) => {
  const { offset } = req.params;
  productoModel
    .find({ state_delete: false })
    .sort({ Price: -1 })
    .skip(offset)
    .limit(5)
    .then((response) => res.status(200).json(response))
    .catch((err) =>
      res.status(500).json("Error recuperando los productos", err)
    );
};

export const createProductos = async (req, res) => {
  try {
    const {
      Prod_Name,
      Price,
      Width,
      Height,
      Colour,
      Images,
      state_delete,
      Delete_at,
      Update_at,
    } = req.body;
    const nuevoProducto = new productoModel({
      Prod_Name,
      Price,
      Width,
      Height,
      Colour,
      Images,
      state_delete,
      Delete_at,
      Created_at: new Date(),
      Update_at,
    });
    await nuevoProducto.save();
    return res.status(201).json({
      data: "Producto creado exitosamente!",
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const updatePartialProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizar = {
      ...req.body,
      Update_at: new Date(),
    };

    const newProduct = await productoModel.findByIdAndUpdate(
      id,
      datosActualizar
    );

    if (!newProduct) {
      return res.status(404).json({
        message: "Producto no encontrado",
      });
    }

    return res.status(200).json({
      message: "Producto actualizado exitosamente",
    });
  } catch (error) {
    return res.status(500).json({
      message: "ocurrió un error al editar el Producto",
      error: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizar = {
      ...req.body,
      Update_at: new Date(),
    };

    const newProduct = await productoModel.findByIdAndUpdate(
      id,
      datosActualizar
    );

    if (!newProduct) {
      return res.status(404).json({
        message: "Producto no encontrado",
      });
    }

    return res.status(200).json({
      message: "Producto actualizado exitosamente",
    });
  } catch (error) {
    return res.status(500).json({
      message: "ocurrió un error al editar el Producto",
      error: error.message,
    });
  }
};

export const deleteLogico = async (req, res) => {
  try {
    const { id } = req.params;
    const productoEliminado = await productoModel.findByIdAndUpdate(id, {
      state_delete: true,
      Deleted_at: new Date(),
    });

    if (!productoEliminado) {
      return res.status(404).json({
        message: "producto no encontrado",
      });
    }

    return res.status(200).json({
      message: "producto eliminado exitosamente",
    });
  } catch (error) {
    return res.status(500).send({
      message: "ocurrió un error al eliminar el producto",
      error: error.message,
    });
  }
};

export const deleteFisico = async (req, res) => {
  try {
    const { id } = req.params;
    const productoEliminado = await productoModel.findByIdAndDelete(id);
    if (!productoEliminado) {
      return res.status(404).json({
        message: "producto no encontrado",
      });
    }
    return res.status(200).json({
      message: "producto eliminado exitosamente",
    });
  } catch (error) {
    return res.status(500).json({
      message: "ocurrió un error al eliminar el producto",
      error: error.message,
    });
  }
};
