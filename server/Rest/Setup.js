function fetchData(query, db) {
  return new Promise((resolve, reject) => {
    db.all(query, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
    db.close();
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
    db.close();
  });
}

function InsertIncludeImage(query,image, db){
  return new Promise((resolve, reject) => {
    let query = db.prepare(query);
    query.run(image, err => {
      if(err) reject(err)
      else {
        resolve("Inserted");
      }
    });
    query.finalize();
    db.close();
    
  });
}

module.exports = {fetchData, InsertData, InsertIncludeImage};