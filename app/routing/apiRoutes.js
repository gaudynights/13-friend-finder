var friends=require("../data/friends");

module.exports=function(app){

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

// var friendCount=friends.length;

// // maybe here is where i compare your results to friend results?
// for (var i=0; i<friends.length;i++){

// }

  app.post("/api/friends", function(req,res){
  	friends.push(req.body);
  })




}; 