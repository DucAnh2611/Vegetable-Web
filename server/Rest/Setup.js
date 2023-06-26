function fetchData(query, db) {
  return new Promise((resolve, reject) => {
    db.all(query, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function InsertData(query, db) {
  return new Promise((resolve, reject) => {
    db.run(query, err => {
      if (err) {
        reject(err);
      } else {
        resolve("Inserted");
      }
    });
  });
}

module.exports = {fetchData, InsertData};