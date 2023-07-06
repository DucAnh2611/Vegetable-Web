const { fetchData, InsertData, InsertIncludeImage } = require("./Setup");

function Admin(app) {

    app.get("/show/user/type", async (req, res) => {
        let responseContext = {
        json: {
            status: "denied",
            field: [],
        },
        status: 404,
        };

        let { userid } = req.query;

        let userValid = await fetchData(
        `
            SELECT tu.id
            FROM Users as u INNER JOIN TypeUser as tu on u.typeUserid = tu.id
            WHERE u.id == ${userid}
        `);

        if(userValid.length !==0 ) {
            responseContext.json = {
                status: "accepted",
                field: userValid[0].id
            };
            responseContext.status = 200;

        }
        
        res.status(responseContext.status).json({ ...responseContext.json });
    });

    app.post("/create/product", async (req, res) => {
        let responseContext = {
        json: {
            status: "denied",
            field: [],
        },
        status: 404,
        };

        let { typeid, productname, price, image, unit, description, quantity } = req.body;

        let userValid = await fetchData(
        `
            SELECT tu.id
            FROM Users as u INNER JOIN TypeUser as tu on u.typeUserid = tu.id
            WHERE u.id == ${userid}
        `);

        let checkValidProduct =await fetchData(`
            SELECT *
            FROM Product
            WHERE PdName == '${productname}'
        `);

        if (checkValidProduct.length === 0 && userValid[0].id === 1) {

            let InsertNewProduct = await InsertIncludeImage(`
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
                '${productname}',
                ${price},
                (?),
                '${unit}',
                '${description}',
                datetime('${new Date().toISOString()}'),
                '${quantity}'
            );
            `, image);
            if(InsertNewProduct === "Inserted") {
                let InsertToType = await fetchData(`
                    SELECT id FROM Product WHERE PdName == '${productname}'
                `);
                if(InsertToType.length !==0) {
                    let Insert = await InsertData(`
                    INSERT INTO TypeProduct_Product (TypeId, PdId)
                    VALUES (${typeid}, ${InsertToType[0].id}) `);

                    responseContext.json = {
                        status: "accepted"
                    };
                    responseContext.status = 200;
                    }
                }
        }
        
        res.status(responseContext.status).json({ ...responseContext.json });
    });

    app.post("/change/orderstate", async (req, res) => {
        let responseContext = {
        json: {
            status: "denied",
            field: [],
        },
        status: 404,
        };

        let { orderid, newstateid, userid } = req.body;

        let userValid = await fetchData(
        `
            SELECT tu.id
            FROM Users as u INNER JOIN TypeUser as tu on u.typeUserid = tu.id
            WHERE u.id = ${userid}
        `);

        if (userValid[0].id === 1) {

            let UpdateOrder = await InsertData(`  
                UPDATE [Order]
                SET OrderStateId = ${newstateid}
                WHERE id = ${orderid}
            `);
            responseContext.json = {
                status: "accepted"
            };
            responseContext.status = 200;
        }

        res.status(responseContext.status).json({ ...responseContext.json });
    });

    app.get("/show/order", async (req, res) => {
        let responseContext = {
        json: {
            status: "denied",
            field: [],
        },
        status: 404,
        };

        let { each, page, userid } = req.query;

        let userValid = await fetchData(
        `
            SELECT tu.id
            FROM Users as u INNER JOIN TypeUser as tu on u.typeUserid = tu.id
            WHERE u.id == ${userid}
        `);

        if (userValid[0].id ===1) {

            let listOrders = await fetchData(`  
                SELECT o.*, SUM(op.quantity * p.price) as 'total', os.state
                FROM OrderState as os INNER JOIN [Order] as o on os.id = o.OrderStateId
                                      INNER JOIN Orders_Product as op ON o.id = op.OrderId
                                      INNER JOIN Product as p ON op.PdId = p.id
                ORDER BY OrderDate DESC
                LIMIT ${each}
                OFFSET ${each *(page-1)}
            `);
            responseContext.json = {
                status: "accepted",
                field: listOrders
            };
            responseContext.status = 200;
        }

        res.status(responseContext.status).json({ ...responseContext.json });
    });
  
};

module.exports = Admin;