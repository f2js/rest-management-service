require("dotenv").config({ path: "./.env" });

const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const dbConnection = require("../Services/DBConnetion");

const { token, restaurant } = require("./testHelpers/testObjects");

process.env.NODE_ENV = "test";

let db, dbCollection;

beforeAll(async () => {
  await dbConnection.connect();
});

beforeEach(async () => {
  db = await dbConnection.get();
  dbCollection = db.collection("restaurant");

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

  test("No token | Access denied", async () => {
    const response = await request.get(`/menu/${restaurantId}`);
    expect(response.status).toBe(401);
    expect(response._body).toBeTruthy();
  });

  test("Resturant not found | Should return 404", async () => {
    const response = await request
      .get(`/menu/5f9f1b9b9b9b9b9b9a9a9a9a`)
      .set("auth-token", token);
    expect(response.status).toBe(404);
    expect(response._body).toBeTruthy();
  });

  test("Valid Token | Should return 200", async () => {
    const response = await request
      .get(`/menu/${restaurantId}`)
      .set("auth-token", token);

    expect(response.status).toBe(200);
    expect(response._body).toBeTruthy();
  });
});

describe("PUT /menu", () => {
  const restaurantId = restaurant._id;

  test("No token | Access denied", async () => {
    const response = await request.put(`/menu/${restaurantId}`);
    expect(response.status).toBe(401);
    expect(response._body).toBeTruthy();
  });

  test("Resturant not found | Should return 404", async () => {
    const response = await request
      .put(`/menu/5f9f1b9b9b9b9b9b9a9a9a9a`)
      .set("auth-token", token)
      .send({ menu: ["new menu"] });
    expect(response.status).toBe(404);
    expect(response._body).toBeTruthy();
  });

  test("Invalid menu | Should return 400", async () => {
    const response = await request
      .put(`/menu/${restaurantId}`)
      .set("auth-token", token)
      .send({ menu: null });
    expect(response.status).toBe(400);
    expect(response._body).toBeTruthy();
  });

  test("Valid Token | Should return 200", async () => {
    const response = await request
      .put(`/menu/${restaurantId}`)
      .set("auth-token", token)
      .send({ menu: ["new menu"] });

    expect(response.status).toBe(200);
    expect(response._body).toBeTruthy();
  });
});

describe("PUT /menu/updateDeliveryPrice", () => {
  const restaurantId = restaurant._id;

  test("No token | Access denied", async () => {
    const response = await request.put(
      `/menu/updateDeliveryPrice/${restaurantId}`
    );
    expect(response.status).toBe(401);
    expect(response._body).toBeTruthy();
  });

  test("Resturant not found | Should return 404", async () => {
    const response = await request
      .put(`/menu/updateDeliveryPrice/5f9f1b9b9b9b9b9b9a9a9a9a`)
      .set("auth-token", token)
      .send({ minDeliveryPrice: 10 });
    expect(response.status).toBe(404);
    expect(response._body).toBeTruthy();
  });

  test("Invalid minDeliveryPrice | Should return 400", async () => {
    const response = await request
      .put(`/menu/updateDeliveryPrice/${restaurantId}`)
      .set("auth-token", token)
      .send({ minDeliveryPrice: null });
    expect(response.status).toBe(400);
    expect(response._body).toBeTruthy();
  });

  test("Valid Token | Should return 200", async () => {
    const response = await request
      .put(`/menu/updateDeliveryPrice/${restaurantId}`)
      .set("auth-token", token)
      .send({ minDeliveryPrice: 10 });

    expect(response.status).toBe(200);
    expect(response._body).toBeTruthy();
  });
});

describe("PUT /menu/updateAddress", () => {
  const restaurantId = restaurant._id;

  test("No token | Access denied", async () => {
    const response = await request.put(`/menu/updateAddress/${restaurantId}`);
    expect(response.status).toBe(401);
    expect(response._body).toBeTruthy();
  });

  test("Resturant not found | Should return 404", async () => {
    const response = await request
      .put(`/menu/updateAddress/5f9f1b9b9b9b9b9b9a9a9a9a`)
      .set("auth-token", token)
      .send({ address: "new address" });
    expect(response.status).toBe(404);
    expect(response._body).toBeTruthy();
  });

  test("Invalid address | Should return 400", async () => {
    const response = await request
      .put(`/menu/updateAddress/${restaurantId}`)
      .set("auth-token", token)
      .send({ address: null });
    expect(response.status).toBe(400);
    expect(response._body).toBeTruthy();
  });

  test("Valid Token | Should return 200", async () => {
    const response = await request
      .put(`/menu/updateAddress/${restaurantId}`)
      .set("auth-token", token)
      .send({ address: "new address" });

    expect(response.status).toBe(200);
    expect(response._body).toBeTruthy();
  });
});

describe("POST /menu/addItem", () => {
  const restaurantId = restaurant._id;

  test("No token | Access denied", async () => {
    const response = await request.post(`/menu/${restaurantId}`);
    expect(response.status).toBe(401);
    expect(response._body).toBeTruthy();
  });

  test("Resturant not found | Should return 404", async () => {
    const response = await request
      .post(`/menu/5f9f1b9b9b9b9b9b9a9a9a9a`)
      .set("auth-token", token)
      .send({ item: "new item" });
    expect(response.status).toBe(404);
    expect(response._body).toBeTruthy();
  });

  test("Invalid item | Should return 400", async () => {
    const response = await request
      .post(`/menu/${restaurantId}`)
      .set("auth-token", token)
      .send({ item: null });
    expect(response.status).toBe(400);
    expect(response._body).toBeTruthy();
  });

  test("Valid Token | Should return 200", async () => {
    const response = await request
      .post(`/menu/${restaurantId}`)
      .set("auth-token", token)
      .send({ item: "new item" });

    expect(response.status).toBe(200);
    expect(response._body).toBeTruthy();
  });
});
