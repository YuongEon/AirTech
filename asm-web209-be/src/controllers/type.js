import Types from "../models/type.js";

export const createType = async (req, res) => {
  try {
    const typeProduct = await Types.create(req.body);
    if (!typeProduct) {
      return res.status(400).json({
        message: "tao that bai",
      });
    }
    return res.status(201).json({
      message: "tao kieu thanh cong",
      data: typeProduct,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const getAllType = async (req, res) => {
  try {
    const typesProduct = await Types.find();
    if (!typesProduct || typesProduct.length <= 0) {
      return res.status(400).json({
        message: "khong co kieu nao",
      });
    }
    return res.status(200).json({
      message: "lay kieu thanh cong",
      data: typesProduct,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
