import Version from "../models/version.js";

export const createVersion = async (req, res) => {
  try {
    const data = req.body;
    const version = await Version.create(data);
    if (!version) {
      return res.status(400).json({
        message: "Create version failed",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
