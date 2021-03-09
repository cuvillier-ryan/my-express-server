
const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello!<h1>");
});

app.get("/contact", function(req, res){
  res.send("You can contact me at: ryanCuvillier@whatever.com");
});

app.get("/about", function(req, res){
  res.send("Hello, my name is Ryan and I am working Node Express at the moment.")
})

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Coffee</li><li>Code</li><li>Beer</li>");
})

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
