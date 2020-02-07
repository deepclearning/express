const express = require('express');

const app = express();

app.get("/", function (request, response) {
    response.send("<h1>Hello World!</h1>")
})

app.get("/contact", function(request, response) {
    response.send("Contact me at: deepclearning@gmail.com");
})

app.get("/about", function(resquest, response) {
    response.send("Hey buddy, myself Abhishek Raj, a full-Stack developer, started working on MEARN stack");
})

app.get("/hobbies", function(request, response){
    response.send("Badminton, movies, chess");
})

app.listen(3000, function() {
    console.log("server started at port 3000");
})

