const { fetchData } = require("./Setup");

function NavigationBar(app, db) {

  app.get("/navigation/cart", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: [],
      },
      status: 404,
    };

    let { username } = req.query;
    let CartList = await fetchData(`
      SELECT p.*, c.quantity
      FROM Users as u INNER JOIN Cart as c ON u.id=c.UserId
                      INNER JOIN Product as p ON c.PdId = p.id
      WHERE username =='${username}'
    `, db);

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

    let { username } = req.query;
    let WishList = await fetchData(`
    SELECT p.*
    FROM Users as u INNER JOIN WishList as w ON u.id = w.UserId
                    INNER JOIN Product as p ON w.PdId = p.id
    WHERE username == '${username}'
    `, db);

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
    `, db);

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
  
}

module.exports = NavigationBar;
