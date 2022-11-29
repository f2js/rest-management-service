const { ObjectId } = require("mongodb");

const restaurant = {
  _id: ObjectId("62c54d09610402a01fd84fa3"),
  restaurant: {
    name: "Marios Pizza",
    location: {
      street: "Lyngby Hovedgade 37",
      postalcode: "2800",
      city: "Kongens Lyngby",
      country: "Danmark",
    },
    tag: "Cafe",
    menu: {
      Burgers: [
        {
          name: "Hamburger",
          price: "15",
        },
        {
          name: "Cheeseburger",
          price: "18",
        },
        {
          name: "Chicken burger",
          price: "25",
        },
      ],
      Pizzas: [
        {
          name: "Pepperoni",
          price: "55",
        },
        {
          name: "Salad kebab",
          price: "65",
        },
        {
          name: "Hawaii",
          price: "50",
        },
      ],
    },
  },
};

const basket = {
  _id: ObjectId("637921cd0c151a0f481d5456"),
  user: {
    username: "freddy",
  },
  basket: {
    restaurant: "Cafe De Picasso",
    items: [
      {
        item: "Coffee",
        quantity: "2",
        price: 29,
      },
      {
        item: "Is te",
        quantity: "3",
        price: 29,
      },
    ],
    price: 145,
    user: {
      username: "freddy",
      email: "freddy@freddy.com",
    },
    updated: {
      $date: {
        $numberLong: "1668882893153",
      },
    },
  },
};

const addToBasket = {
  restaurant: "Cafe De Picasso",
  items: [
    { item: "Coffee", quantity: "2", price: 29 },
    { item: "Is te", quantity: "3", price: 29 },
  ],
  user: {
    username: "freddy",
    email: "freddy@freddy.com",
  },
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
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyMSI6eyJfaWQiOiI2Mzc5MmQ1ODE2ZjM1MWViNzEwZWNkMmMiLCJuYW1lIjoiRnJlZGR5IEtydWVnZXIiLCJ1c2VybmFtZSI6InJlYWxzbGltZnJlZGR5IiwiZW1haWwiOiJmcmVkZHlAZnJlZGR5LmNvbSIsInBhc3N3b3JkIjoiYmxhYmxhYmxhIiwicm9sZSI6InVzZXIifSwiaWF0IjoxNjY5NzQ1OTk2fQ";

module.exports = {
  restaurant,
  basket,
  addToBasket,
  user1,
  user2,
  token,
};
