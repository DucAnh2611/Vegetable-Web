const { fetchData, InsertData, InsertIncludeImage } = require("./Setup");
const fs = require("fs");

function Signup(app) {
  app.post("/signup/auth", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };

    let UserSignup = req.body;
    let UserFilter = await fetchData(
      `
        SELECT username, email, phoneNum
        FROM Users
        WHERE username == '${UserSignup.username}' OR email == '${UserSignup.email}' OR phoneNum == '${UserSignup.phoneNum}'`);

    if (UserFilter.length !== 0) {
      UserFilter.forEach((element) => {
        Object.keys(element).forEach((e) => {
          if (element[e] == UserSignup[e]) {
            if (!responseContext.json.field[e]) {
              responseContext.json.field[e] = "same";
            }
          }
        });
      });
    } 
    else {
      let defImage = fs.readFileSync("./db/DefaultValue/Default.png");
      let InsertUser = await InsertIncludeImage(
        `
          INSERT INTO Users (
              username,
              password,
              fullname,
              birthday,
              email,
              phoneNum,
              address,
              avatar,
              typeUserId
          )
          VALUES (
              '${UserSignup.username}',
              '${UserSignup.password}',
              '${UserSignup.fullname}',
              (SELECT DATE('${UserSignup.birthday}')),
              '${UserSignup.email}',
              '${UserSignup.phoneNum}',
              'Not update',
              (?),
              (SELECT id FROM TypeUser WHERE type = "client")
            )
          `,
        defImage);
      if(InsertUser === "Inserted") {
        let userid = await fetchData(`SELECT id FROM Users WHERE username == '${UserSignup.username}'`);

        let DefaultMethod = await InsertData(`
          INSERT INTO Method_user (methodTypeId, description, UserId) VALUES (
            (SELECT id FROM MethodType WHERE type == 'cash'),
            '',
            ${userid[0].id}
            )
        `);

        responseContext.json.status = "accepted";
        responseContext.json.field = {userid: userid[0].id}
        responseContext.status = 200;
      }
        
    }

    res.status(responseContext.status).json({ ...responseContext.json });
  });
}
module.exports = Signup;
