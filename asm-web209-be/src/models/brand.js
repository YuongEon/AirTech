import mongoose from 'mongoose'

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  products: {
    type: mongoose.Types.ObjectId,
    ref: "Products"
  }
},
  {timestamps: true, versionKey: false}
)

export default mongoose.model("Brands", brandSchema);