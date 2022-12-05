const dbConnection = require("../Services/DBConnetion");
const { ObjectId } = require("mongodb");
const { isValidObjectId } = require("mongoose");

exports.getResturantMenu = async (req, res, next) => {
  let db = await dbConnection.get();
  let restaurantCollection = db.collection("restaurant");

  const { id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }

  restaurantCollection
    .find({ _id: ObjectId(id) })
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

  const { id } = req.params;
  const { menu } = req.body;

  if (!isValidObjectId(id)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }

  if (menu == null) {
    res.status(400).json({ message: "Invalid menu" });
    return;
  }

  restaurantCollection.findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: { menu: menu } },
    (err, restaurant) => {
      if (restaurant.value == null) {
        res.status(404).json({ message: "Restaurant not found" });
        return;
      }
      if (err) {
        res.status(500).json({ message: "Error updating menu" });
        return;
      }
      res.status(200).json({ message: "Menu updated", menu: menu });
    }
  );
};

exports.addItemToMenu = async (req, res) => {
  let db = await dbConnection.get();
  let restaurantCollection = db.collection("restaurant");

  const { id } = req.params;
  const { item } = req.body;

  if (!isValidObjectId(id)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }

  if (item == null) {
    res.status(400).json({ message: "Invalid item" });
    return;
  }

  restaurantCollection.findOneAndUpdate(
    { _id: ObjectId(id) },
    { $push: { menu: item } },
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

  const { id } = req.params;
  const { minDeliveryPrice } = req.body;

  if (!isValidObjectId(id)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }

  if (minDeliveryPrice == null) {
    res.status(400).json({ message: "Invalid minDeliveryPrice" });
    return;
  }

  restaurantCollection.findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: { minDeliveryPrice: minDeliveryPrice } },
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
        minDeliveryPrice: minDeliveryPrice,
      });
    }
  );
};

exports.updateAddress = async (req, res) => {
  let db = await dbConnection.get();
  let restaurantCollection = db.collection("restaurant");

  const { id } = req.params;
  const { address } = req.body;

  if (!isValidObjectId(id)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }

  if (address == null) {
    res.status(400).json({ message: "Invalid address" });
    return;
  }

  restaurantCollection.findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: { "location.street": address } },
    (err, restaurant) => {
      if (restaurant.value == null) {
        res.status(404).json({ message: "Restaurant not found" });
        return;
      }
      if (err) {
        res.status(500).json({ message: "Error updating address" });
        return;
      }
      res.status(200).json({ message: "Address updated", address: address });
    }
  );
};
