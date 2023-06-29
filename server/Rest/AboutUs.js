const { fetchData,} = require("./Setup");

function AboutUs(app) {

    app.get('/aboutus/all', async (req, res) => {
    
        let responseContext = {
          json: {
            status: "denied",
            field: [],
          },
          status: 404,
        };
      
      
        let UserFilter = await fetchData(`
        SELECT fullname, tu.type, avatar
        FROM Users as u INNER JOIN TypeUser as tu on u.typeUserId = tu.id
        WHERE tu.id >= 2 AND tu.id <=6
        ORDER BY tu.type ASC`);
      
        if(UserFilter.length !== 0) {
            responseContext.json.status = "accepted";
            responseContext.json.field = UserFilter;
            responseContext.status= 200
      
        }
      
        res.status(responseContext.status).json({...responseContext.json});
    });

};

module.exports = AboutUs;