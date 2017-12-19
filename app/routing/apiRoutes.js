var friends=require("../data/friends");

module.exports=function(app){

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

// maybe here is where i compare your results to friend results?

  app.post("/api/friends", function(req,res){
  	friends.push(req.body);
  })




}; 