const { fetchData, InsertData } = require("./Setup");

module.exports = function Profile(app, db) {

  app.get("/profile/:userid", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };

    let { userid } = req.params;

    let UserInfo = await InsertData(`
      SELECT fullname, birthday, email, phoneNum, address, avatar
      FROM Users
      WHERE id = ${userid}
    `, db);

    if(UserInfo.length !== 0) {
      responseContext = {
        json: {
          status: "accepted",
          field: {...UserInfo},
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

    let { fullname, birthday, email, phoneNum, address, avatar } = req.body;
    let { userid } = req.params;

    let UpdateUserInfo = db.prepare(`
      UPDATE Users SET (
        fullname = '${fullname}',
        birthday = '${birthday}',
        email = '${email}',
        phoneNum = '${phoneNum}',
        address = '${address}',
        avatar = (?)
      )
      WHERE id == ${userid}
    `);
    
    UpdateUserInfo.run(avatar, err =>{
      if(err) {
        throw err;
      }
      responseContext = {
        json: {
          status: "accepted",
        },
        status: 200,
      };

    });
    UpdateUserInfo.finalize();

    db.close();

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
    `,db)

    if(CheckCurrentPassword.length !== 0) {
      if(newpass === confirmpass) {

        let UpdatePassword = await InsertData(`
            UPPDATE Users SET password = '${newpass}' WHERE id == ${userid}
        `,db);

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
          name: "new confirm",
          msg: "diff"
        }
      }      
    }
    else {
      responseContext.json.field = 
      {
        name: "current",
        msg: "wrong"
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

    let {methodtypeid, description} = req.body;
    let { userid } = req.params;

    let CheckExistMethod = await fetchData(`
      SELECT *
      FROM Method_User
      WHERE Userid = ${userid} AND description = '${description}'
    `,db);

    if(CheckExistMethod.length ===0 ){
      let InsertNewMethod = await InsertData(`
        INSERT INTO Method_User (methodTypeId, description, UserId)
        VALUES (${methodtypeid}, '${description}', ${userid});
      `,db);
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });

};
