const { ObjectId } = require("mongodb");

const restaurant = {
  _id: ObjectId("5f9f1b9b9b9b9b9b9b9b9b9b"),
  name: "Taco Bell",
  rating: 3.5,
  openHours: "11:00-23:00",
  minDeliveryPrice: 30,
  location: {
    street: "Hovedgaden 2",
    postalCode: 2200,
    city: "København",
    country: "Denmark",
  },
  menu: [
    {
      itemNumber: 1,
      name: "Tacos",
      price: 20,
    },
    {
      itemNumber: 2,
      name: "Burritos",
      price: 30,
    },
    {
      itemNumber: 3,
      name: "Nachos",
      price: 40,
    },
  ],
  tags: ["mexican", "tacos"],
};

module.exports = {
  restaurant,
};
