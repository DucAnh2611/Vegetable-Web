const { fetchData, InsertData } = require("./Setup");

module.exports = function Cart(app, db) {

  app.post("/cart/remove", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: [],
      },
      status: 404,
    };

    let { userid } = req.query;

    let ProductFiltered = await fetchData(
      `
          SELECT *
          FROM Cart
          WHERE UserId == ${userid}
        `,
      db
    );

    if (ProductFiltered.length !== 0) {
      let removeAllItem = await InsertData(
        `
            DELETE FROM Cart WHERE UserId == ${userid}
          `,
        db
      );
      responseContext.json = {
        status: "accepted",
      };
      responseContext.status = 200;
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });
  
};
