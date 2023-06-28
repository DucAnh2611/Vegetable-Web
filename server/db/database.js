const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('vegetable.db');

const fs = require('fs');
const sql = fs.readFileSync('./db.sql', 'utf8');

db.exec(sql, function(err) {
  if (err) {
    console.error(err.stack);
  } else {
    console.log('SQL file executed successfully.');
  }
   db.close();
});