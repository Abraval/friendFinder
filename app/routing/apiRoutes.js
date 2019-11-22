var friendsArray = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function(req, res) {
    // res.json(req.body);

    var diff = "";
    var matchName = "";
    var matchPicture = "";
    var newPersonScore = req.body.scores;

    // console.log(newPersonScore)
    for (var i = 0; i < friendsArray.length; i++) {
      var sum = 0;
      for (var j = 0; j < newPersonScore.length; j++) {
        sum += Math.abs(newPersonScore[j] - friendsArray[i].scores[j]);
        // console.log(sum);
      }
      if (diff === "") {
        matchName = friendsArray[i].name;
        matchPicture = friendsArray[i].photo;
        diff = sum;
      } else if (sum < diff) {
        matchName = friendsArray[i].name;
        matchPicture = friendsArray[i].photo;
        diff = sum;
      }
      console.log(diff, matchName);
    }
    // console.log(matchName)
    friendsArray.push(req.body);

    res.send({ name: matchName, photo: matchPicture });
  });
};

