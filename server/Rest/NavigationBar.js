const { fetchData, InsertData } = require("./Setup");

function NavigationBar(app) {

  app.get("/navigation/cart", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: [],
      },
      status: 404,
    };

    let { userid } = req.query;
    let CartList = await fetchData(`
      SELECT p.*, c.quantity
      FROM Users as u INNER JOIN Cart as c ON u.id=c.UserId
                      INNER JOIN Product as p ON c.PdId = p.id
      WHERE u.id == '${userid}'
    `);

    if(CartList.length !==0) {
      responseContext= {
        json : {
          status: "accepted",
          field : CartList
        },
        status: 200     
      } 
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });

  app.get("/navigation/wish-list", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };

    let { userid } = req.query;
    let WishList = await fetchData(`
    SELECT p.*
    FROM Users as u INNER JOIN WishList as w ON u.id = w.UserId
                    INNER JOIN Product as p ON w.PdId = p.id
    WHERE u.id == ${userid}
    `);

    if(WishList.length !==0) {
      responseContext= {
        json : {
          status: "accepted",
          field : WishList
        },
        status: 200     
      } 
    }
    
    res.status(responseContext.status).json({ ...responseContext.json });
  });

  app.get("/navigation/profile/:username", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };

    let { username } = req.params;
    let UserInfo = await fetchData(`
    SELECT username, avatar, fullname
    FROM Users
    WHERE username == '${username}' 
    `);

    if(UserInfo.length !==0) {
      responseContext.json={
        status: "accepted",
        field: {...UserInfo[0]}
      }
      responseContext.status= 200
      
    }
    else {
      responseContext.json.field['username'] = "not found"
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });
  
  app.get("/navigation/search", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: [],
      },
      status: 404,
    };

    let { key, page, each } = req.query;
    let ProductFiltered = await fetchData(`
    SELECT p.*
    FROM Product as p
    WHERE PdName LIKE '%${key}%' 
    LIMIT ${each}
    OFFSET ${(page -1) *each}
    `);

    if(ProductFiltered.length !==0) {
      responseContext.json={
        status: "accepted",
        field: ProductFiltered
      }
      responseContext.status= 200
      
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });

  app.get("/navigation/wish-list/remove", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: [],
      },
      status: 404,
    };

    let { productid, userid } = req.query;

    let ProductFiltered = await fetchData(`
      SELECT *
      FROM Wishlist
      WHERE PdId == ${productid} AND UserId == ${userid}
    `);

    if(ProductFiltered.length !==0) {
      let removeProductFromWishList = await InsertData(`
        DELETE FROM WishList WHERE PdId == ${productid} AND UserId == ${userid}
      `)
      responseContext.json={
        status: "accepted"
      }
      responseContext.status= 200
      
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });

  app.get("/navigation/cart/remove", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: [],
      },
      status: 404,
    };

    let { productid, userid } = req.query;

    let ProductFiltered = await fetchData(`
      SELECT *
      FROM Cart
      WHERE PdId == ${productid} AND UserId == ${userid}
    `);

    if(ProductFiltered.length !==0) {
      let removeProductFromCart = await InsertData(`
        DELETE FROM Cart WHERE PdId == ${productid} AND UserId == ${userid}
      `)
      responseContext.json={
        status: "accepted"
      }
      responseContext.status= 200
      
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });

}

module.exports = NavigationBar;
