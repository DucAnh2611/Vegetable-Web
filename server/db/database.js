const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('vegetable.db');

const fs = require('fs');
const sql = fs.readFileSync('./db.sql', 'utf8');

const { fetchData, InsertData, InsertIncludeImage } = require('../Rest/Setup')

// db.exec(sql, function(err) {
//   if (err) {
//     console.error(err.stack);
//   } else {
//     console.log('SQL file executed successfully.');
//   }
//    db.close();
// });

function InsertUser() {

    fs.readFile('./DefaultValue/Users.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
      
        // Parse the JSON data
        const UsersList = JSON.parse(data);
      
        // Access the contents of the JSON file
        UsersList.forEach(async element => {
            let defImage = fs.readFileSync("./DefaultValue/Default.png")
            let InsertUser = InsertIncludeImage(`
                INSERT INTO Users (
                    username,
                    password,
                    fullname,
                    birthday,
                    email,
                    phoneNum,
                    address,
                    avatar,
                    typeUserId
                  )
                VALUES (
                    '${element.username}',
                    '${element.password}',
                    '${element.fullname}',
                    '${element.birthday}',
                    '${element.email}',
                    '${element.phoneNum}',
                    '${element.address}',
                    (?),
                    ${element.typeUserId}
                )
            `, defImage, db);
        });

        db.close();

    });
}

function InsertMethodType() {
    fs.readFile('./DefaultValue/MethodType.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
      
        // Parse the JSON data
        const list = JSON.parse(data);
      
        // Access the contents of the JSON file
        list.forEach(async element => {
            let Insert = await InsertData(`
                INSERT INTO MethodType (type)
                VALUES ('${element.type}');
            `, db);
        });

        db.close();

    });
}

function InsertUserType() {
    fs.readFile('./DefaultValue/UserTypes.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
      
        // Parse the JSON data
        const list = JSON.parse(data);
      
        // Access the contents of the JSON file
        list.forEach(async element => {
            let Insert = await InsertData(`
                INSERT INTO TypeUser (type)
                VALUES ('${element.type}');
            `, db);
        });

        db.close();

    });
}

function InsertProductType() {
    fs.readFile('./DefaultValue/ProductType.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
      
        // Parse the JSON data
        const list = JSON.parse(data);
      
        // Access the contents of the JSON file
        list.forEach(async element => {
            let Insert = await InsertData(`
                INSERT INTO TypeProduct (type)
                VALUES ('${element.type}');
            `, db);
        });

        db.close();

    });
}

function InsertOrderState() {
    fs.readFile('./DefaultValue/OrderState.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
      
        // Parse the JSON data
        const list = JSON.parse(data);
      
        // Access the contents of the JSON file
        list.forEach(async element => {
            let Insert = await InsertData(`
                INSERT INTO OrderState (state)
                VALUES ('${element.state}');
            `, db);
        });

        db.close();

    });
}

function InsertProduct() {
    fs.readFile('./DefaultValue/Product.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
      
        // Parse the JSON data
        const list = JSON.parse(data);
      
        // Access the contents of the JSON file
        list.forEach(async element => {

        });

        db.close();

    });
}

// InsertUserType();
// InsertUser();
// InsertMethodType();
// InsertProductType();
// InsertOrderState();