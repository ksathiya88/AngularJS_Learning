// set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

    // configuration =================


const employees= [
    {
      "key": 1,
      "name": "ABC",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key": 2,
      "name": "John",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key": 3,
      "name": "Michael",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key": 4,
      "name": "Michael",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key": 5,
      "name": "Michael",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key": 6,
      "name": "Michael",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    }
  ];

    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

    
   app.get('/getEmployees', function(req, res){
      console.log("employees",employees);
      res.send(employees);
    }); 

   app.delete('/deleteEmployee',function(req,res){
      console.log("delete employees",employees);
      var employee = employees.find((employee)=>{
          return employee.key==req.query.key;
      });
      employees.splice(employees.indexOf(employee),1);
      res.send(employees);         
      //console.log("employee",employee);
      //console.log("id value",req.query);
   }) 

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");