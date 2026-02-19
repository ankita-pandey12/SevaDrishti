/**
 * MySQL connection pool for SERVICE_REQUESTS (analytics DB)
 * Uses DB_HOST, DB_USER, DB_PASSWORD, DB_NAME from env
 */

const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "service_ops_analytics",
  connectionLimit: 10,
  waitForConnections: true,
});

console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_host:", process.env.DB_HOST);

module.exports = pool;
