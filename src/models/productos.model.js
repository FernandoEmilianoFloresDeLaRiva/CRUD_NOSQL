import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
  Prod_Name: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Width: {
    type: Number,
    required: true,
  },
  Height: {
    type: Number,
    required: true,
  },
  Colour: {
    type: String,
    required: true,
  },
  Images: {
    type: String,
    required: true,
  },
  state_delete: {
    type: Boolean,
    required: false,
    default: false,
  },
  Delete_at: {
    type: Date,
    required: false,
    default: null,
  },
  Created_at: {
    type: Date,
    required: false,
    default: new Date(),
  },
  Update_at: {
    type: Date,
    required: false,
    default: null,
  },
});

export default mongoose.model("Producto", productoSchema);
