var express = require('express');

app = express();

app.use(express.static("public"));  //this is for include static file and use .css file in our html file;

var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: true}));
var friend_list=["anand","aditya","madhukesh","pratul","shubham"];

app.get("/friend",function(req,res){
    var friend=friend_list;
    res.render("base.ejs",{friend : friend});
});

app.post("/addfriend",function(req,res){
    var newfriend = req.body.name;
    friend_list.push(newfriend);
    res.redirect("/friend");
});

app.listen(3000,function(){
    console.log("server is ready to use");
});