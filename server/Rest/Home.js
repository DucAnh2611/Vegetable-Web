const { fetchData } = require("./Setup");

function Home(app) {

  app.get("/home/list-type", async (req, res) => {
    
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };

    let ListType = await fetchData(`
      SELECT type
      FROM TypeProduct
    `);

    if(ListType.length !==0) {
      responseContext= {
        json : {
          status: "accepted",
          field : ListType
        },
        status: 200     
      } 
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });

  app.get("/home/list-item", async (req, res) => {
    
    let responseContext = {
      json: {
        status: "denied",
        field: [],
      },
      status: 404,
    };

    let { type, amount } = req.query;
    let conditionQuery = type !== 0  ? `WHERE tp_p.TypeId == ${type}` : `WHERE tp_p.TypeId != ${type}`

    let ListProductFilterByType = await fetchData(`
      SELECT p.*
      FROM TypeProduct_Product as tp_p INNER JOIN Product as p ON tp_p.PdId = p.id
      ${conditionQuery}
      LIMIT ${amount}
    `);

    if(ListProductFilterByType.length !==0) {
      responseContext= {
        json : {
          status: "accepted",
          field : ListProductFilterByType
        },
        status: 200     
      } 
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });

  app.get("/home/list-review", async (req, res) => {
    
    let responseContext = {
      json: {
        status: "denied",
        field: [],
      },
      status: 404,
    };

    let { amount } = req.query;

    let ListReview = await fetchData(`
      SELECT r.title, r.description, r.rating, u.avatar as user_avatar, u.username, p.image as product_image
      FROM Product as p INNER JOIN Review as r ON p.id = r.PdId
                        INNER JOIN Users as u ON r.UserId = u.id
      ORDER BY RANDOM()
      LIMIT ${amount}
    `);

    if(ListReview.length !==0) {
      responseContext= {
        json : {
          status: "accepted",
          field : ListReview
        },
        status: 200     
      } 
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });

};

module.exports = Home;