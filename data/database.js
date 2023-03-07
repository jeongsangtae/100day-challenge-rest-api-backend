const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function initDb() {
  const client = await MongoClient.connect("mongodb://127.0.0.1:27017");
  database = client.db("second-api");
}

function getDb() {
  if (!database) {
    throw new Error("데이터베이스가 연결되지 않음!");
  }

  return database;
}

module.exports = {
  initDb: initDb,
  getDb: getDb,
};
