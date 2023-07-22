import mongoose from "mongoose";
const versionSchema = new mongoose.Schema(
  {
    colorId: {
      type: mongoose.Types.ObjectId,
      ref: "Color",
      required: true,
    },
    classifyTypeId: {
      type: mongoose.Types.ObjectId,
      ref: "ClassifyType",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Version", versionSchema)