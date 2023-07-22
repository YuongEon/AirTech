import Color from "../models/color.js";

export const createColor = async (req, res) => {
  try {
    const data = req.body;
    const color = await Color.create(data);
    if (!color) {
      return res.status(400).json({
        message: "Create color failed",
      });
    }
    return res.status(201).json({
      message: "Create color success",
      data: color,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const fetchColor = async (req, res) => {
  try {
    const colorData = await Color.find();
    if (colorData.length <= 0) {
      return res.status(400).json({
        message: "No color was found",
      });
    }
    return res.status(200).json({
      message: "Fetch color success",
      data: colorData,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const fetchColorById = async (req, res) => {
  try {
    const { id } = req.params;
    const colorData = await Color.findById({ _id: id });
    if (!colorData) {
      res.status(400).json({
        message: "No color was found",
      });
    }
    return res.status(200).json({
      message: "Get color success",
      data: colorData,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteColorById = async (req, res) => {
  try {
    const { id } = req.params;
    const colorDelete = await Color.findByIdAndDelete({ _id: id });
    if (!colorDelete) {
      return res.status(400).json({
        message: "No color was found to delete",
      });
    }
    return res.status(200).json({
      message: "Delete color success",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
