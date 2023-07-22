import mongoose from 'mongoose';
const imageSchema = new mongoose.Schema({
  color : {
    required: true,
    type: mongoose.Types.ObjectId,
    ref: "Color"
  },
  classifyType: {
    type: mongoose.Types.ObjectId,
    ref: "ClassifyType",
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
})

export default mongoose.model("Image", imageSchema)