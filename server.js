'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/test", (request, response) => {
  response.end("Use /move and post the current state \n");
});

app.post("/move", (request, response) => {
  console.log(request.body.state);
  var state = request.body.state;
  
  response.end("Posted\n" + state);
});

app.listen(3000, "0.0.0.0", () => {
  console.log(`Server is listening on localhost port 3000`);
});
