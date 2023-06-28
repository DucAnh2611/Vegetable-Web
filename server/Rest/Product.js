const { fetchData } = require("./Setup");

function Product(app) {

  app.post("/product/list", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };

    let { key, page, eachPage, type, minPrice, maxPrice } = req.body;

    let maxPriceFilter = await fetchData(`
      SELECT MAX(price)
      FROM Product
    `)

    let listItemFiltered = await fetchData(
      `
      SELECT p.*
      FROM Product as p INNER JOIN TypeProduct_Product as tp_p ON p.id=tp_p.PdId
                        INNER JOIN TypeProduct as tp ON tp_p.TypeId = tp.id
      WHERE tp.type == '${type}' AND p.PdName LIKE '%${key}%' AND p.price >= ${minPrice} AND p.price <= ${maxPrice === 0 ? maxPriceFilter : maxPrice}
      LIMIT ${eachPage}
      OFFSET ${(page - 1) * eachPage}
      `);

    if (listItemFiltered.length !== 0) {
      responseContext = {
        json: {
          status: "accepted",
          field: listItemFiltered,
        },
        status: 200,
      };
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });

  app.get("/product/type", async (req, res) => {
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
      `);

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
  
}

module.exports = Product;
