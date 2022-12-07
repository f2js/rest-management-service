const fs = require("fs");
require("dotenv").config({ path: "./.env" });

const { buildSubgraphSchema } = require("@apollo/subgraph");
const { ApolloServer, gql } = require("apollo-server");
const { MongoClient } = require("mongodb");

const menuRESTAPI = require("./Controllers/restMenuAPI");

const resolvers = require("./graphql/resolvers");

const dbConnection = require("./Services/DBConnetion");

const app = require("./app");
const https = require("https");

const port = process.env.API_PORT || 3000;

const config = {
  port: port,
  host: "0.0.0.0",
};

dbConnection.connect();

// Load schema
const schema = gql(fs.readFileSync("./graphql/schema.graphql", "utf8"));

const client = new MongoClient(process.env.DB_URI);
client.connect();

const database = client.db(process.env.DB_NAME);

const dataSources = () => ({
  menuAPI: new menuRESTAPI(database),
});

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs: schema, resolvers }]),
  dataSources: dataSources,
  introspection: true,
});

// Apollo server
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV == "development") {
  app.listen(config.port, config.host, (e) => {
    if (e) {
      throw new Error("Error starting server");
    }
    console.log(
      `App running locally without sslOptions on host: ${config.host} : port ${config.port}`
    );
  });
} else {
  https.createServer(app).listen(port, () => {
    console.log(`App running on port ${port}`);
  });
}
