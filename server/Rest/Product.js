const { fetchData } = require("./Setup");

function Product(app) {

  app.post("/product/list", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: [],
      },
      status: 404,
    };

    let { key, page, eachPage, type, minPrice, maxPrice } = req.body;

    let maxPriceFilter = await fetchData(`
      SELECT MAX(price) as 'max'
      FROM Product
    `);

    if(maxPrice === 0) {
      maxPrice = maxPriceFilter[0].max;
    }


    let conditionType = `tp.id == ${type}`;
    if(parseInt(type) ===0 ){ 
      conditionType = `tp.id <> ${type}`;
    };

    let listItemFiltered = await fetchData(
      `
      SELECT p.*, (SELECT AVG(rating) FROM Review as r WHERE r.PdId == p.id) as 'AvgRating'
      FROM Product as p INNER JOIN TypeProduct_Product as tp_p ON p.id=tp_p.PdId
                        INNER JOIN TypeProduct as tp ON tp_p.TypeId = tp.id
      WHERE ${conditionType} AND p.PdName LIKE '%${key}%' AND p.price >= ${minPrice} AND p.price <= ${maxPrice === 0 ? maxPriceFilter[0].max : maxPrice}
      LIMIT ${eachPage}
      OFFSET ${(page - 1) * eachPage}
    `);

    let maxPage = await fetchData(
      `
      SELECT COUNT(*) as 'rows'
      FROM Product as p INNER JOIN TypeProduct_Product as tp_p ON p.id=tp_p.PdId
                        INNER JOIN TypeProduct as tp ON tp_p.TypeId = tp.id
      WHERE ${conditionType} AND p.PdName LIKE '%${key}%' AND p.price >= ${minPrice} AND p.price <= ${maxPrice}
    `);

    if (listItemFiltered.length !== 0) {
      responseContext = {
        json: {
          status: "accepted",
          field: { maxPage : Math.ceil(parseInt(maxPage[0].rows)/eachPage),
                  maxPrice: maxPriceFilter[0].max,
                  list: listItemFiltered
          }
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
        SELECT id, type
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
