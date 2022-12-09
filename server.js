require("dotenv").config({ path: "./.env" });
const dbConnection = require("./Services/DBConnetion");

const app = require("./app");
const https = require("https");

const port = process.env.API_PORT || 3000;

const config = {
  port: port,
};

dbConnection.connect();

console.log(process.env.NODE_ENV);

app.listen(config.port, (e) => {
  if (e) {
    throw new Error("Error starting server");
  }
  console.log(`App running locally without sslOptions on port ${config.port}`);
});
