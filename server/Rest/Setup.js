
require('dotenv').config();
const sqlite3 = require('sqlite3').verbose();
const databasePath = './db/vegetable.db';

function fetchData(query) {
  const db = new sqlite3.Database(databasePath);
  return new Promise((resolve, reject) => {
    db.all(query, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
      db.close();
    });
  });
}

function InsertData(query) {
  const db = new sqlite3.Database(databasePath);
  return new Promise((resolve, reject) => {
    db.run(query, err => {
      if (err) {
        reject(err);
      } else {
        resolve("Inserted");
      }
      db.close();
    });
  });
}

function InsertIncludeImage(query, image){
  const db = new sqlite3.Database(databasePath);

  return new Promise((resolve, reject) => {
    let NewQuery = db.prepare(query);
    NewQuery.run(image, err => {
      if(err) reject(err)
      else {
        resolve("Inserted");
      }
      db.close();
    });
    NewQuery.finalize();
  });
}

function InsertDataDb(query, dbPath) {
  const db = new sqlite3.Database(dbPath);
  return new Promise((resolve, reject) => {
    db.run(query, err => {
      if (err) {
        reject(err);
      } else {
        resolve("Inserted");
      }
      db.close();
    });
  });
}

function InsertIncludeImageDb(query, image, dbPath){
  const db = new sqlite3.Database(dbPath);

  return new Promise((resolve, reject) => {
    let NewQuery = db.prepare(query);
    NewQuery.run(image, err => {
      if(err) reject(err)
      else {
        resolve("Inserted");
      }
      db.close();
    });
    NewQuery.finalize();
  });
}

module.exports = {fetchData, InsertData, InsertIncludeImage, InsertDataDb, InsertIncludeImageDb};