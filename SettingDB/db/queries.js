const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function searchUsername(username){
  const { rows } = await pool.query("SELECT * FROM usernames WHERE username LIKE '%' || ($1) || '%'", [username]);
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function truncateTable(){
  await pool.query("TRUNCATE TABLE usernames");
}

module.exports = {
  getAllUsernames,
  insertUsername,
  searchUsername,
  truncateTable,
}
