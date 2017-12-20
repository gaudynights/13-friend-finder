var friends = require("../data/friends");

var currFriend;
var prevFriend;
var checked = true;
var k;

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });


    app.post("/api/friends", function(req, res) {


        // compare your results to friend results
        // cycle through each friend in the array
        // I only want my app to match you with the preset friends(barrys), not other people who have used the app, so I set the i limit to 10 instead of friends.length-1
        for (var i = 0; i < 10; i++) {
            var sum = 0;
            // cycle through each score in that friends array and new user array
            for (var j = 0; j < friends[i].scores.length; j++) {
                sum += Math.abs(parseInt(friends[i].scores[j]) - parseInt(req.body.scores[j]));
            }
            // 
            console.log("sum " + sum)
            prevFriend = sum;
            if (prevFriend < currFriend) {
                currFriend = prevFriend;
                k = i;
            }

        }
        currFriend = 101;
        friends.push(req.body);
        res.json(friends[k]);

    });




};