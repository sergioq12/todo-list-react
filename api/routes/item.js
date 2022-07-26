const startOfDay = require("date-fns/startOfDay");
const endOfDay = require("date-fns/endOfDay");
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

// update an item
router.put("/:id", async (req, res) => {
  try {
    console.log(`Trying to update item with id: ${req.params.id}`);
    console.log(req.body);
    const itemRetrieved = await Item.findById(req.params.id);
    if (req.body.done) {
      itemRetrieved.done = req.body.done;
    }
    if (req.body.description) {
      itemRetrieved.description = req.body.description;
    }
    await itemRetrieved.save();
    res.status(200).json(itemRetrieved);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Items by Date - Not Done
router.get("/find", async (req, res) => {
  console.log("Getting all Items by a date");
  let today = req.query.today;
  let tomorrow = req.query.tomorrow;
  try {
    // const itemsRetrieved = await Item.find({ userId: req.params.itemId });
    today = today.split("-");
    today = new Date(today[2], today[0], today[1]);
    tomorrow = tomorrow.split("-");
    tomorrow = new Date(tomorrow[2], tomorrow[0], tomorrow[1]);
    const itemsRetrieved = await Item.find({
      createdAt: {
        $gte: startOfDay(today),
        $lte: endOfDay(tomorrow),
      },
    });
    console.log(itemsRetrieved);
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
