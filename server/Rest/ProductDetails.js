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

    let {productid} = req.params;

    let ProductInfo = await fetchData(
      `
        SELECT p.*
        FROM Product as p
        WHERE p.id == ${parseInt(productid)}
      `,
      db
    );

    let Review = await fetchData(
      `
        SELECT u.username, u.fullname, r.title, r.desciption, r.rating
        FROM Product as p INNER JOIN Review as r ON p.id = r.PdId
                          INNER JOIN Users as u ON r.UserId = u.id
        WHERE p.id == ${parseInt(productid)}
      `,
      db
    );

    let relatedProduct = await fetchData(
      `
        SELECT p.*
        FROM Product as p INNER JOINN TypeProduct_Product as tp_p ON p.id =tp_p.PdId
        WHERE tp_p.type IN (SELECT TypeId
                            FROM Product as p INNER JOINN TypeProduct_Product as tp_p ON p.id =tp_p.PdId
                            WHERE p == ${parseInt(productid)})
        ORDER BY p.PdName ASC
      `,
      db
    );

    if (ProductInfo.length !== 0) {
      responseContext = {
        json: {

          status: "accepted",
          field: {
            
            productInfo: ProductInfo,
            review: Review,
            relatedProduct: relatedProduct

          }

        },
        status: 200,
      };
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });

  app.post("/product-detail/:productid/addtocart", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };

    let { productid } = req.params;
    let { quantity, userid } = req.body;

    let ProductInfo = await fetchData(
      `
        SELECT p.*
        FROM Product as p
      `,
      db
    );

    let Review = await fetchData(
      `
        SELECT *
        FROM Product as p INNER JOIN Review as r ON p.id = r.PdId
                          INNER JOIN Users as u ON r.UserId = u.id
        WHREE
      `,
      db
    );

    let relatedProduct = await fetchData(
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

  app.post("/product-detail/:productid/submit-review", async (req, res) => {
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

  app.post("/product-detail/:productid/addwishlist", async (req, res) => {
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
