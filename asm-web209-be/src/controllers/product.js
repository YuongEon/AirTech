// import cloudinary from "cloudinary";
import Brands from "../models/brand.js";
import Categories from "../models/category.js";
import Products from "../models/product.js";
import Types from "../models/type.js";
import cloudinary from "../utils/cloudinary.js";

export const getAllProduct = async (req, res) => {
  try {
    const pageNumber = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const sortBy = req.query.sortBy || "createdAt";
    const sortOrder = req.query.sortOrder || "desc";
    const keyword = req.query.keyword || "";

    const query = {};
    if (keyword) {
      query.$text = { $search: keyword };
    }

    const options = {
      page: pageNumber,
      limit: pageSize,
      sort: { [sortBy]: sortOrder },
    };

    const products = await Products.paginate(query, options);
    if (!products || products.totalDocs === 0) {
      return res.status(200).json({
        message: "Không có sản phẩm nào",
        data: [],
      });
    }

    return res.status(200).json({
      message: "Lấy sản phẩm thành công",
      data: products,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const getPaginationProducts = async (req, res) => {
  try {
    const pageNumber = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const sortBy = req.query.sortBy || "createdAt";
    const sortOrder = req.query.sortOrder || "desc";
    const keyword = req.query.keyword || "";
    const category = req.query.categoryId || ""

    const query = {};
    if (keyword) {
      query.name = { $search: keyword };
    }
    if (category) {
      query.categoryId = category;
    }

    const products = await Products.find(query)
      .sort({ [sortBy]: sortOrder })
      .skip(pageSize * (pageNumber - 1))
      .limit(pageSize);

    const total = await Products.find(query).count();

    if (!products || products.totalDocs === 0) {
      return res.status(200).json({
        message: "Không có sản phẩm nào",
        data: [],
      });
    }

    return res.status(200).json({
      message: "Lấy sản phẩm thành công",
      data: { docs: products, total: total },
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const getOneProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res.status(200).json({
        message: "san pham khong ton tai",
      });
    }
    return res.status(200).json({
      message: "lay san pham thanh cong",
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const data = req.body;
    const file = req.body.imgArray[0]

    const existingProduct = await Products.findOne({ name: data.name });
    if (existingProduct) {
      return res.status(400).json({
        message: "San pham da ton tai",
      });
    }

    const uploadImg = await cloudinary.uploader.upload(file, {upload_preset: 'air_tech', chunk_size: 6000000});

    const product = await Products.create({ ...data, imgArray: [uploadImg.secure_url] });
    if (!product) {
      return res.status(404).json({
        message: "san pham khong ton tai",
      });
    }

    await Categories.findByIdAndUpdate(product.categoryId, {
      $addToSet: { products: product._id },
    });
    await Brands.findByIdAndUpdate(product.brandId, {
      $addToSet: { products: product._id },
    });
    await Types.findByIdAndUpdate(product.typeId, {
      $addToSet: { products: product._id },
    });

    return res.status(201).json({
      message: "tao san pham thanh cong",
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const {id} = req.params
    const product = await Products.findOneAndDelete({ _id: id })
    res.status(200).json({
      message: "xoa san pham thanh cong",
      data: product
    })
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
