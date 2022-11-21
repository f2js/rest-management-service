require("dotenv").config({ path: "./config.env" });
const dbConnection = require("./Services/DBConnetion");

const app = require("./app");
const https = require("https");

const port = process.env.API_PORT || 3000;

dbConnection.connect();

if (process.env.NODE_ENV == "development") {
  app.listen(port, () => {
    console.log(`App running locally without sslOptions on port ${port}`);
  });
} else {
  https.createServer(app).listen(port, () => {
    console.log(`App running on port ${port}`);
  });
}
