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

//Encrypted PW = $2b$12$MnzRVaWYqxHK6173LNNVNOmIGp5FKtYNV.FTfMfKsffGhHfx2.IOi
const user1 = {
  _id: ObjectId("63792d5816f351eb710ecd2c"),
  name: "Freddy Krueger",
  username: "realslimfreddy",
  email: "freddy@freddy.com",
  password: "blablabla",
  role: "user",
};

const user2 = {
  _id: ObjectId("63792d5818f351eb710ecd2c"),
  name: "Frederik Dahl",
  username: "realslimtestuser",
  email: "freddy@freddy.com",
  password: "blablabla",
  role: "user",
};
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdiYmU1ZmVjZjhhMTAxM2M5MGIxNDAiLCJ1c2VybmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAZ2V0LmNvbSIsImZpcnN0bmFtZSI6IkZyZWRlcmlrIiwibGFzdG5hbWUiOiJEYWhsIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NjkwNTQwNjV9.6D0GofcmGE3nONbMa_e8zw395TPmemH4d4sVqyTBNZM";

module.exports = {
  restaurant,
  user1,
  user2,
  token,
};
