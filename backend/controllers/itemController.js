// backend/controllers/itemController.js
const record = require("../models/Item");

const getItems = async (req, res) => {
  try {
    console.log("hey i am at getItems url");
    const items = await record.find({});
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getItems,
};
