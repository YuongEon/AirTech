import mongoose from "mongoose";

const classifyTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("ClassifyType", classifyTypeSchema);
