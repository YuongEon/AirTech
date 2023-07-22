import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ratting: {
    type: Number,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  imgArray: {
    type: Array,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  sale: {
    type: Number,
    required: false
  },
  categoryId: {
    type: mongoose.Types.ObjectId,
    ref: "Categories",
  },
  brandId: {
    type: mongoose.Types.ObjectId,
    ref: "Brands"
  },
  typeId: {
    type: mongoose.Types.ObjectId,
    ref: "Types"
  },
  versions: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Version"
    }
  ]
},
  {timestamps: true, versionKey: false}
)

productSchema.plugin(mongoosePaginate)

export default mongoose.model("Products", productSchema)
