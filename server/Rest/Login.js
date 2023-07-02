const {fetchData} = require("./Setup");

function Login(app) {

  app.post("/login/auth", async (req, res) => {
    
    let responseContext = {
      json: {
        status: "denied",
        field: [],
      },
      status: 404,
    };

    let UserLogin = req.body;

    let UserFilter = await fetchData(`
    SELECT password, id
    FROM Users
    WHERE username == '${UserLogin.username}'`);

    if(UserFilter.length !== 0) {
      if(UserFilter.filter(e => e.password === UserLogin.password).length !== 0 ) {

        responseContext.json.status = "accepted";
        responseContext.json.field = {name: "id", value: UserFilter[0].id}
        responseContext.status= 200

      }
      else {
        responseContext.json.field.push({name: "password", msg: "wrong"})
      }

    }
    else {
      responseContext.json.field.push({name: "username", msg: "mis"})
    }

    res.status(responseContext.status).json({...responseContext.json});
  });

}

module.exports = Login;
