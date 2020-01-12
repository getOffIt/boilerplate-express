
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function middleware(req, res, next) {
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
});

/** 1) Meet the node console. */
console.log("Hello World!");

/** 2) A first working Express Server */



/** 3) Serve an HTML file */

app.get('/', function (req, res) {
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
  });

/** 4) Serve static assets  */

app.use(express.static( __dirname + '/public'));

/** 5) serve JSON on a specific route */

/** 6) Use the .env file to configure the app */
 // Done
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !





/** 8) Chaining middleware. A Time server */

const middleware = (req, res, next) => {
  
  req.time = "Sun Jan 12 2020 00:20:35 GMT+0000 (GMT)";
  
  next();
};

app.get("/now", middleware, (req, res) => {
  res.json({
    time: req.time
  });
});

/** 9)  Get input from client - Route parameters */
app.get("/:word/echo", (req, res) => {
  res.json({echo: req.params.word});
});

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

app.post("/name", (req, res) => {
  var queryString = req.body.first + " " + req.body.last;
  res.json({name: queryString});
});

// app.get("/name", (req, res) => {
//   var queryString = req.query.first + " " + req.query.last;
//   res.json({name: queryString});
// });
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;

