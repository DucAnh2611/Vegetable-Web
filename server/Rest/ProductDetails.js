const { fetchData, InsertData } = require("./Setup");

module.exports = function ProductDetails(app, db) {

  app.get("/product-detail/:productid", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };

    let ListType = await fetchData(
      `
        SELECT type
        FROM TypeProduct
      `,
      db
    );

    if (ListType.length !== 0) {
      responseContext = {
        json: {
          status: "accepted",
          field: ListType,
        },
        status: 200,
      };
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });
  
};
