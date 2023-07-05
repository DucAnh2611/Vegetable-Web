const { fetchData, InsertData } = require("./Setup");

function OrderTracking(app) {

  app.get("/order-tracking", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };

    let { orderid, userid } = req.query;

    let OrderState = await fetchData(
    `
    SELECT os.state, o.id, o.OrderAdress, o.OrderDate, o.OrderFullname, o.OrderEmail, o.OrderPhoneNum, o.OrderDescription, mu.description, mt.type
    FROM  OrderState as os INNER JOIN [Order] as o ON os.id = o.OrderStateId
                          INNER JOIN Method_User as mu ON o.MethodId = mu.id
                          INNER JOIN MethodType as mt ON mu.methodTypeId = mt.id
    WHERE o.id = ${orderid} AND o.UserId = ${userid}
    `);

    if (OrderState.length !== 0) {

      let OrderProduct = await fetchData(
      `
      SELECT p.*, o_d.quantity
      FROM Product as p INNER JOIN Orders_Product as o_d ON p.id = o_d.PdId
                        INNER JOIN [Order] as o ON o_d.OrderId = o.id
      WHERE o.id = ${orderid}
      `);

      responseContext = {
        json: {
          status: "accepted",
          field: {
            OrderState: OrderState[0],
            OrderProduct: OrderProduct
          },
        },
        status: 200,
      };
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });

  app.post("/order-tracking/review/add", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };

    let ReviewInfo = req.body;

    let InsertReview = await InsertData(
    `
      INSERT INTO Review (PdId, UserId, title, description, rating)
      VALUES (${ReviewInfo.productid}, ${ReviewInfo.userid}, '${ReviewInfo.title}',' ${ReviewInfo.description}', ${ReviewInfo.rating});
    `);

    if (InsertReview ==="Inserted") {

      responseContext = {
        json: {
          status: "accepted"
        },
        status: 200,
      };
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });

  app.get("/order-tracking", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };

    let { orderid, email, userid } = req.query;

    let OrderState = await fetchData(
    `
    SELECT id
    FROM [Order]
    WHERE UserId = ${userid} AND id = ${orderid} AND OrderEmail = '${email}'
    `);

    if (OrderState.length !== 0) {

      responseContext = {
        json: {
          status: "accepted",
          field: OrderState[0].id
        },
        status: 200,
      };
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });

};

module.exports = OrderTracking
