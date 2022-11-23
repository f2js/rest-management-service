const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);

const { restaurant } = require("./testHelpers/testObjects");
const dbConnection = require("../Services/DBConnetion");

process.env.NODE_ENV = "test";

let db, dbCollection;

beforeAll(async () => {
  await dbConnection.connect();
});

beforeEach(async () => {
  db = await dbConnection.get();

  dbCollection = await db.collection("restaurant");
  await dbCollection.insertOne(restaurant);
});

afterEach(async () => {
  await dbCollection.deleteOne({ _id: restaurant._id });
});

afterAll(async () => {
  await dbConnection.close();
});

describe("GET /menu", () => {
  const restaurantId = restaurant._id;

  test("Access denied", async () => {
    const response = await request.get(`/menu/${restaurantId}`);
    expect(response.status).toBe(401);
    expect(response._body).toBeTruthy();
  });
});
