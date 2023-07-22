import mongoose from "mongoose";

const colorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    colorHash: {
      type: String,
      required: true
    }
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Color", colorSchema);
