const { fetchData, InsertData, InsertIncludeImage } = require("./Setup");

function Profile(app) {

  app.get("/profile/:userid", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };

    let { userid } = req.params;

    let UserInfo = await fetchData(`
      SELECT fullname, email, phoneNum as 'phone', address, avatar
      FROM Users
      WHERE id = ${userid}
    `);

    if(UserInfo.length !== 0) {
      responseContext = {
        json: {
          status: "accepted",
          field: {...UserInfo[0]},
        },
        status: 200,
      };
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });

  app.get("/profile/method/:userid", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: [],
      },
      status: 404,
    };

    let { userid } = req.params;

    let UserMethods = await fetchData(`
      SELECT mt.type, mu.id, mu.description
      FROM Method_User as mu INNER JOIN MethodType as mt on mu.methodTypeId = mt.id
      WHERE UserId = ${userid}
    `);

    if(UserMethods.length !== 0) {
      responseContext = {
        json: {
          status: "accepted",
          field: UserMethods,
        },
        status: 200,
      };
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });

  app.get("/profile/orders/:userid", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: [],
      },
      status: 404,
    };

    let { userid } = req.params;
    let { each, page } = req.query;

    let Orders = await fetchData(`
      SELECT o.id, o.OrderDate, o.OrderFullname, o.OrderEmail, os.state, o.OrderDescription, sum(op.quantity * p.price) as 'total'
      FROM OrderState as os INNER JOIN [Order] as o ON os.id = o.OrderStateId
                            INNER JOIN Orders_Product as op ON o.id = op.OrderId
                            INNER JOIN Product as p ON op.PdId = p.id
      WHERE o.UserId = ${userid}
      GROUP BY o.id
      LIMIT ${each}
      OFFSET ${each * (page-1)}
    `);

    if(Orders.length !== 0) {
      responseContext = {
        json: {
          status: "accepted",
          field: Orders,
        },
        status: 200,
      };
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });


  app.post("/profile/:userid/update", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };

    let { fullname, email, phone, address, avatar } = req.body;
    let { userid } = req.params;

    let UserGet = await fetchData(`
      SELECT *
      FROM Users
      WHERE id = ${userid}
    `);

    if(UserGet.length !== 0) {
      let UpdateUserInfo = await InsertIncludeImage(`
        UPDATE Users 
        SET 
          fullname = '${fullname}',
          email = '${email}',
          phoneNum = '${phone}',
          address = '${address}',
          avatar = (?)
        
        WHERE id = ${userid}
      `, Buffer.from(avatar)); 
      
      responseContext = {
        json: {
          status: "accepted"
        },
        status: 200,
      };
    }


    res.status(responseContext.status).json({ ...responseContext.json });
  });

  app.post("/profile/:userid/password-change", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };

    let { currentpass, confirmpass, newpass} = req.body;
    let { userid } = req.params;

    let CheckCurrentPassword = await fetchData(`
      SELECT * 
      FROM Users
      WHERE id == ${userid} AND password = '${currentpass}'
    `);

    if(CheckCurrentPassword.length !== 0) {
      if(newpass === confirmpass) {

        let UpdatePassword = await InsertData(`
            UPDATE Users SET password = '${newpass}' WHERE id == ${userid}
        `);

        responseContext = {
          json: {
            status: "accepted"
          },
          status: 200,
        };
      }
      else {
        responseContext.json.field = 
        {
          name: "Confirm password",
          msg: "Confirm password and New password is different"
        }
      }      
    }
    else {
      responseContext.json.field = 
      {
        name: "Current password",
        msg: "Wrong"
      }
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });

  app.post("/profile/:userid/add-method", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };

    let { methodtypeid, description} = req.body;
    let { userid } = req.params;

    let CheckExistMethod = await fetchData(`
      SELECT *
      FROM Method_User
      WHERE Userid = ${userid} AND description = '${description}' AND methodTypeId == ${methodtypeid}
    `);

    if(CheckExistMethod.length ===0 ){
      let InsertNewMethod = await InsertData(`
        INSERT INTO Method_User (methodTypeId, description, UserId)
        VALUES (${methodtypeid}, '${description}', ${userid});
      `);
      
      responseContext = {
        json: {
          status: "accepted"
        },
        status: 200,
      };
    }
    else {
      responseContext.json.field = {msg: "same"}
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });
  
  app.get("/method/view", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };


    let UserMethods = await fetchData(`
      SELECT *
      FROM MethodType
      WHERE type <> 'cash'
    `);

    if(UserMethods.length !== 0) {
      responseContext = {
        json: {
          status: "accepted",
          field: UserMethods,
        },
        status: 200,
      };
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });
};

module.exports = Profile;