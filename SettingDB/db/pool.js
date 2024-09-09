const { Pool } = require("pg");

require('dotenv').config()

module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: process.env.ROLE_NAME,
  database: "top_users",
  password: process.env.ROLE_PASSWORD,
  port: 5432 // The default port
});
