import Brands from "../models/brand.js";
import Products from "../models/product.js";

export const createBrand = async (req, res) => {
  try {
    const brand = await Brands.create(req.body);
    if (!brand) {
      return res.status(400).json({
        message: "tao that bai",
      });
    }
    return res.status(201).json({
      message: "tao thuong hieu thanh cong",
      data: brand,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const getAllBrand = async (req, res) => {
  try {
    const brands = await Brands.find();
    if (!brands || brands.length <= 0) {
      return res.status(400).json({
        message: "khong co thuong hieu nao",
      });
    }

    const brandsWithProductCount = []

    for(const brand of brands){
      const totalProduct = await Products.countDocuments({brandId: brand._id})
      const newBrandData = {
        _id: brand._id,
        name: brand.name,
        createdAt: brand.createdAt,
        updatedAt: brand.updatedAt,
        totalProduct: totalProduct
      }

      brandsWithProductCount.push(newBrandData)
    }

    return res.status(200).json({
      message: "lay thuong hieu thanh cong",
      data: brandsWithProductCount,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
