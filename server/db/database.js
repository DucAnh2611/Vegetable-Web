const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('vegetable.db');

const fs = require('fs');
const sql = fs.readFileSync('./db.sql', 'utf8');

const { InsertDataDb, InsertIncludeImageDb  } = require('../Rest/Setup')


function InsertUser() {

    fs.readFile('./DefaultValue/Users.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
      
        // Parse the JSON data
        const UsersList = JSON.parse(data);
      
        // Access the contents of the JSON file
        for(const element of UsersList) {
            let defImage = fs.readFileSync(element.image);

            let InsertUser = InsertIncludeImageDb(`
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
                    ${element.typeUser}
                )
            `, defImage, './vegetable.db');
        }

        console.log("finish InsertUser");

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
        for(const element of list) {
            let Insert = InsertDataDb(`
                INSERT INTO MethodType (type)
                VALUES ('${element.type}')
            `, './vegetable.db');
        };
        console.log("finish InsertMethodType");
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
        for(const element of list) {

            let Insert = InsertDataDb(`
                INSERT INTO TypeUser (id, type)
                VALUES (${element.id}, '${element.type}')
            `, './vegetable.db');
        };
        console.log("finish InsertUserType");
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
        for(const element of list) {
            let Insert = InsertDataDb(`
                INSERT INTO TypeProduct (type)
                VALUES ('${element.type}')
            `, './vegetable.db');
        };
        console.log("finish InsertProductType");
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
        for(const element of list) {
            let Insert = InsertDataDb(`
                INSERT INTO OrderState (state)
                VALUES ('${element.state}')
            `, './vegetable.db');
        };
        console.log("finish InsertOrderState");
    });
}

function InsertProduct() {
    fs.readFile('./DefaultValue/Product.json', 'utf8', async (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
      
        // Parse the JSON data
        const list = JSON.parse(data);
      
        // Access the contents of the JSON file
        for (const element of list) {
            let img = fs.readFileSync(element.image);

            let InsertIntoProduct = await InsertIncludeImageDb(`
            INSERT INTO Product (
                PdName,
                price,
                image,
                unit,
                description,
                modifyDate,
                quantity
              )
            VALUES (
                '${element.name}',
                ${element.price},
                (?),
                '${element.unit}',
                '${element.description}',
                datetime('${new Date().toISOString()}'),
                ${element.quantity}
              )
            `, img, './vegetable.db');

            if(InsertIntoProduct  === "Inserted") {
                for (const eType of element.type) {
                    let insertIntoProductType = await InsertDataDb(`
                      INSERT INTO TypeProduct_Product (TypeId, PdId)
                      VALUES (
                        ${eType.type},
                        (SELECT id FROM Product WHERE PdName == '${element.name}')
                      )
                    `, './vegetable.db');
                }
            }

        };
        console.log("finish InsertProduct");
    });
}

// db.exec(sql, function(err) {
//     if (err) {
//     console.error(err.stack);
//     } else {
//     console.log('SQL file executed successfully.');
    
//     InsertUserType();
//     InsertMethodType();
//     InsertProductType();
//     InsertOrderState();
//     }
// });    
InsertUser();
InsertProduct();