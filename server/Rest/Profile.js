const { fetchData } = require("./Setup");

module.exports = function Profile(app, db) {

  app.post("/profile/update", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };

    res.status(responseContext.status).json({ ...responseContext.json });
  });

  app.post("/profile/password-change", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };

    res.status(responseContext.status).json({ ...responseContext.json });
  });

  app.post("/profile/add-method", async (req, res) => {
    let responseContext = {
      json: {
        status: "denied",
        field: {},
      },
      status: 404,
    };

    res.status(responseContext.status).json({ ...responseContext.json });
  });

};
