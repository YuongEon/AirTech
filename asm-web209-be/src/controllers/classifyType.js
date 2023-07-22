import ClassifyType from "../models/classify_type.js";

export const createClassifyType = async (req, res) => {
  try {
    const data = req.body;
    const classifyType = await ClassifyType.create(data);
    if (!classifyType) {
      return res.status(400).json({
        message: "Create classify type failed",
      });
    }
    return res.status(201).json({
      message: "Create classify type success",
      data: classifyType,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const fetchClassifyType = async (req, res) => {
  try {
    const classifyTypeData = await ClassifyType.find();
    if (classifyTypeData.length <= 0) {
      return res.status(400).json({
        message: "No classify type was found",
      });
    }
    return res.status(200).json({
      message: "Fetch classify type success",
      data: classifyTypeData,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const fetchClassifyTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const classifyTypeData = await ClassifyType.findById({ _id: id });
    if (!classifyTypeData) {
      res.status(400).json({
        message: "No classify type was found",
      });
    }
    return res.status(200).json({
      message: "Get classify type success",
      data: classifyTypeData,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteClassifyTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const classifyDelete = await ClassifyType.findByIdAndDelete({ _id: id });
    if (!classifyDelete) {
      return res.status(400).json({
        message: "No classify type was found to delete",
      });
    }
    return res.status(200).json({
      message: "Delete classify type success",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
