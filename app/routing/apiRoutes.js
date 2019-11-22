var friendsArray = require ("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsArray)
    });

    app.post("/api/friends", function(req, res) {
        res.json(req.body)
        friendsArray.push(req.body)
        
        return res.end();
      });
}

