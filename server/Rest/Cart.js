const { fetchData, InsertData } = require("./Setup");

function Cart(app) {

  app.post("/cart/check-out", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: [],
      },
      status: 404,
    };

    let { methodid, userinfo} = req.body;

    let allCartUser = await fetchData(
      `
          SELECT PdId, quantity
          FROM Cart
          WHERE UserId == ${userinfo.userid}
      `);

    let getMethodid = await fetchData(`
      SELECT * 
      FROM Method_User
      WHERE UserId == ${userinfo.userid} AND id == ${methodid}
    `);

    if (getMethodid.length !== 0) {

      let InsertToOrder = await InsertData(`  
        INSERT INTO [Order] (
          UserId,
          OrderAdress,
          OrderDate,
          OrderFullname,
          OrderEmail,
          OrderPhoneNum,
          OrderDescription,
          OrderStateId,
          MethodId
        )
        VALUES (
          ${userinfo.userid}, 
          '${userinfo.orderaddress}', 
          datetime('${userinfo.orderdate}'),
          '${userinfo.fullname}',
          '${userinfo.email}',
          '${userinfo.phonenum}',
          '${userinfo.description}',
          1,
          ${methodid}
          )
      `);

      if(InsertToOrder === "Inserted") {

        let GetCurrentOrder = await fetchData(`
          SELECT id
          FROM [Order]
          WHERE UserId == ${userinfo.userid}
          ORDER BY OrderDate DESC 
          LIMIT 1
        `);

        allCartUser.forEach(async e => {

          let InsertProductToOrder = await InsertData(`
            INSERT INTO Orders_Product (PdId, OrderId, quantity)
            VALUES (${e.PdId}, ${GetCurrentOrder[0].id}, ${e.quantity});
          `);

          let updateStockProduct= await InsertData(`
            UPDATE Product SET quantity = quantity - ${e.quantity} WHERE id == ${e.PdId}
          `);

        });

        responseContext.json = {
          status: "accepted",
          field: {id: GetCurrentOrder[0].id}
        };
        responseContext.status = 200;

      }
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });

  app.post("/cart/set-quantity", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: [],
      },
      status: 404,
    };

    let { userid, productid, quantity } = req.body;

    let UpdateQuantity = await InsertData(
      `
        UPDATE Cart SET quantity =${quantity} WHERE PdId== ${productid} AND UserId == ${userid}
      `);

    if(UpdateQuantity === "Inserted") {
      responseContext.json = {
        status: "accepted",
      };
      responseContext.status = 200;      
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });

  app.get("/cart/remove-all", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: [],
      },
      status: 404,
    };
    let { userid } = req.query;

    let UpdateQuantity = await InsertData(
      `
        DELETE FROM Cart WHERE UserId = ${userid}
      `);

    if(UpdateQuantity === "Inserted") {
      responseContext.json = {
        status: "accepted",
      };
      responseContext.status = 200;      
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });
  
};

module.exports = Cart;