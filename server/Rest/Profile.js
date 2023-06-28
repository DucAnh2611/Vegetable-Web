const { fetchData, InsertData } = require("./Setup");

module.exports = function Profile(app, db) {

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

    let UpdateUserInfo = await InsertData(`
      UPDATE Users SET (
        fullname = '${fullname}',
        birthday = '${birthday}',
        email = '${email}',
        phoneNum = '${phoneNum}',
        address = '${address}',
        avatar = '${avatar}'
      )
      WHERE id == ${userid}
    `, db);

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

    let {methodid, description} = req.body;
    let { userid } = req.params;

    res.status(responseContext.status).json({ ...responseContext.json });
  });

};
