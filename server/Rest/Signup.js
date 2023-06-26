const e = require("express");
const { fetchData, InsertData } = require("./Setup");

function Signup(app, db) {

    app.post("/signup/auth", async(req, res) => {
        
        let responseContext = {
            json: {
              status: "denied",
              field: {},
            },
            status: 404,
          };
      
          let UserSignup = req.body;
      
          let UserFilter = await fetchData(`
          SELECT username, email, phoneNum
          FROM Users
          WHERE username == '${UserSignup.username}' OR email == '${UserSignup.email}' OR phoneNum == '${UserSignup.phoneNum}'`,db);

          if(UserFilter.length !==0) {

            UserFilter.forEach(element => {
                Object.keys(element).forEach(e => {

                    if(element[e] == UserSignup[e]){

                        if(!responseContext.json.field[e]) {
                            responseContext.json.field[e] = "same"
                        }

                    }

                })
            });

          }
          else {
                let InsertUser = await InsertData(`
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
                    '${UserSignup.birthday}',
                    '${UserSignup.email}',
                    '${UserSignup.phoneNum}',
                    '123',
                    '123',
                    1
                  )
                `, db);
                responseContext.json.status = "accepted";
                responseContext.status= 200
          }
      
          res.status(responseContext.status).json({...responseContext.json});
    })

}
module.exports = Signup;
  