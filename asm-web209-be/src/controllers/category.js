import Categories from "../models/category.js";
import Products from "../models/product.js";

export const createCategory = async (req, res) => {
  try {
    const category = await Categories.create(req.body);
    if (!category) {
      return res.status(400).json({
        message: "tao that bai",
      });
    }
    return res.status(201).json({
      message: "tao danh muc thanh cong",
      data: category,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const getAllCategory = async (req, res) => {
  try {
    const categories = await Categories.find();
    if (!categories || categories.length <= 0) {
      return res.status(400).json({
        message: "khong co danh muc nao",
      });
    }

    const categoriesWithProductCount = []

    for(const category of categories){
      const totalProduct = await Products.countDocuments({categoryId: category._id})
      const newCategoryData = {
        _id: category._id,
        name: category.name,
        createdAt: category.createdAt,
        updatedAt: category.updatedAt,
        totalProduct: totalProduct
      }

      categoriesWithProductCount.push(newCategoryData)
    }

    return res.status(200).json({
      message: "lay danh muc thanh cong",
      data: categoriesWithProductCount,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const deleteCategory = async(req, res) => {
  try {
    const categoryId = req.params.id
    const deletedCategory = await Categories.findByIdAndDelete({_id: categoryId});
    if(!deleteCategory){
      return res.status(400).json({
        message: "Category doesn't exits"
      })
    }
    await Products.deleteMany({ categoryId: categoryId });

    return res.status(200).json({
      message: "Delete category success"
    })
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
