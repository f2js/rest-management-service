const dbConnection = require("../Services/DBConnetion");
const { ObjectId } = require("mongodb");
const { isValidObjectId } = require("mongoose");

exports.getResturantMenu = async (req, res, next) => {
  let db = await dbConnection.get();
  let restaurantCollection = db.collection("restaurant");

  if (!isValidObjectId(req.params.id)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }

  restaurantCollection
    .find({ _id: ObjectId(req.params.id) })
    .toArray((err, restaurant) => {
      if (restaurant.length === 0) {
        res.status(404).json({ message: "Restaurant not found" });
        return;
      }
      if (err) {
        res.status(500).json({ message: "Error getting menu" });
        next();
      }
      res.status(200).json({ menu: restaurant[0].menu });
    });
};

exports.updateResturantMenu = async (req, res) => {
  let db = await dbConnection.get();
  let restaurantCollection = db.collection("restaurant");

  if (!isValidObjectId(req.params.id)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }

  if (req.body.menu == null) {
    res.status(400).json({ message: "Invalid menu" });
    return;
  }

  restaurantCollection.findOneAndUpdate(
    { _id: ObjectId(req.params.id) },
    { $set: { menu: req.body.menu } },
    (err, restaurant) => {
      if (restaurant.value == null) {
        res.status(404).json({ message: "Restaurant not found" });
        return;
      }
      if (err) {
        res.status(500).json({ message: "Error updating menu" });
        return;
      }
      res.status(200).json({ message: "Menu updated", menu: req.body.menu });
    }
  );
};

exports.addItemToMenu = async (req, res) => {
  let db = await dbConnection.get();
  let restaurantCollection = db.collection("restaurant");

  if (!isValidObjectId(req.params.id)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }

  if (req.body.item == null) {
    res.status(400).json({ message: "Invalid item" });
    return;
  }

  restaurantCollection.findOneAndUpdate(
    { _id: ObjectId(req.params.id) },
    { $push: { menu: req.body.item } },
    (err, restaurant) => {
      if (restaurant.value == null) {
        res.status(404).json({ message: "Restaurant not found" });
        return;
      }
      if (err) {
        res.status(500).json({ message: "Error adding item to menu" });
        return;
      }
      res.status(200).json({ message: "Item added to menu" });
    }
  );
};

exports.updateMinDeliveryPrice = async (req, res) => {
  let db = await dbConnection.get();
  let restaurantCollection = db.collection("restaurant");

  if (!isValidObjectId(req.params.id)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }

  if (req.body.minDeliveryPrice == null) {
    res.status(400).json({ message: "Invalid minDeliveryPrice" });
    return;
  }

  restaurantCollection.findOneAndUpdate(
    { _id: ObjectId(req.params.id) },
    { $set: { minDeliveryPrice: req.body.minDeliveryPrice } },
    (err, restaurant) => {
      if (restaurant.value == null) {
        res.status(404).json({ message: "Restaurant not found" });
        return;
      }
      if (err) {
        res.status(500).json({ message: "Error updating minDeliveryPrice" });
        return;
      }
      res.status(200).json({
        message: "minDeliveryPrice updated",
        minDeliveryPrice: req.body.minDeliveryPrice,
      });
    }
  );
};

exports.updateAddress = async (req, res) => {
  let db = await dbConnection.get();
  let restaurantCollection = db.collection("restaurant");

  if (!isValidObjectId(req.params.id)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }

  if (req.body.address == null) {
    res.status(400).json({ message: "Invalid address" });
    return;
  }

  restaurantCollection.findOneAndUpdate(
    { _id: ObjectId(req.params.id) },
    { $set: { "location.street": req.body.address } },
    (err, restaurant) => {
      if (restaurant.value == null) {
        res.status(404).json({ message: "Restaurant not found" });
        return;
      }
      if (err) {
        res.status(500).json({ message: "Error updating address" });
        return;
      }
      res
        .status(200)
        .json({ message: "Address updated", address: req.body.address });
    }
  );
};
