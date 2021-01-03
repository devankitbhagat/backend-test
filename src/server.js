"use strict";
import routes from "./api";
import { Redis } from "./storage";

const Hapi = require("hapi");

// Create a server with a host and port
const server = Hapi.server({
  host: "localhost",
  port: 8001,
});

// Add the route
server.route(routes);

// Start the server
async function start() {
  try {
    await server.start();
    await Redis.connect();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("Server running at:", server.info.uri);
}

start();
