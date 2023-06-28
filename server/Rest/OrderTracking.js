const { fetchData, InsertData } = require("./Setup");

function OrderTracking(app) {

  app.get("/order-tracking:orderid", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };

    let { orderid } = req.params;

    let OrderState = await fetchData(
    `
    SELECT os.state, o.*
    FROM Order as o INNER JOIN OrderState as os ON o.OrderStateId = os.id
    WHERE o.id == ${orderid}
    `);

    if (OrderState.length !== 0) {

      let OrderProduct = await fetchData(
      `
      SELECT p.PdName, p.price, p.image, o_d.quantity
      FROM Product as p INNER JOIN Order_Product as o_d ON p.id = o_d.PdId
                        INNER JOIN Order as o ON o_d.OrderId = o.id
      WHERE o.id == ${orderid}
      `);

      responseContext = {
        json: {
          status: "accepted",
          field: {
            OrderState: OrderState,
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

};

module.exports = OrderTracking
