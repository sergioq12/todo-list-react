const router = require("express").Router();
const Item = require("../models/Item");

// add an item
router.post("/", async (req, res) => {
  console.log("Adding an item");
  const newItem = new Item(req.body);
  try {
    const savedItem = await newItem.save();
    res.status(200).json(savedItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete an item
router.delete("/:id", async (req, res) => {
  console.log("Deleting an item");
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted ");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Items by Date - Not Done
router.get("/:itemId", async (req, res) => {
  console.log("Getting all Items by a date");
  try {
    const itemsRetrieved = await Item.find({ userId: req.params.itemId });
    res.status(200).json(itemsRetrieved);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all items
router.get("/", async (req, res) => {
  console.log("Getting all Items");
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
