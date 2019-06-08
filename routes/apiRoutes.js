// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friendsData");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "vi8sit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  app.get("/api/waitlist", function (req, res) {
    res.json(waitListData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {

    var newFriend = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);



    // res.json(newFriend);

    var newFriendScores = newFriend.scores

    var newFriendScore = 0;

    for (var i = 0; i < newFriendScores.length; i++) {
      newFriendScore += Math.abs(newFriendScores[i]);

    }

    console.log(newFriendScore);
    var differences = [];

    if (friendsData.length > 1) {
      friendsData.forEach(function (user) {
        var totalDifference = 0;
        for (var i = 0; i < newFriend.scores.length; i++) {

          var otherScore = user.scores[i];
         

          var thisScore = newFriend.scores[i];

          var difference = +otherScore - +thisScore

          totalDifference += Math.abs(difference);
        }

        differences.push(totalDifference);

      });
      console.log(differences);

      var minDiff = Math.min.apply(null, differences);
      console.log(minDiff);


      var roomMatch = [];

      for (var i = 0; i < differences.length; i++) {
        if (differences[i] === minDiff && !0) {
          roomMatch.push(friendsData[i]);
        }
      }
      res.json(roomMatch);
      console.log(roomMatch);


    }

    friendsData.push(newFriend);
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    friendsData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};