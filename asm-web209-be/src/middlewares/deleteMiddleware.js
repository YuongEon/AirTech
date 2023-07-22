import mongoose from 'mongoose'
import Products from '../models/product.js';


export const deleteManyProductBySchema = (typeName) => {
  return (req, res, next) => {
    const {id} = req.params
    Products.deleteMany({[typeName]: id})
    next()
  }
}