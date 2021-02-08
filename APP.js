var http = require("http");
var express = require('express');
var app = express();
var router = express.Router(); // this one and var app = express(); work the same way 
// require the bcrypt module
//var bcrypt = require('bcrypt');
var bodyParser = require('body-parser');
//var session = require('express-session')
// this will bring the code for database connection
var connection = require('./Config/conn'); // this path goes out the current directory and goes to find connction  


var login = require('./routers/login');
var registration = require('./routers/register');
var client = require('./routers/client');
var admin = require('./routers/admin');

//we are using app because of express
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


/*//this os for session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));*/


//this is the server for 
var server = app.listen(3000, "127.0.0.1", function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log(" listening at http://%s:%s", host, port)
 
});

app.get('/', function(req, res) {
    console.log(" First test")
});
 
 //routers for login and registration
app.post('/registration',registration.register);
app.post('/login',login.login);

//these are routers for client 
app.post('/customer/:id',client.viewOrder);
app.delete('/deleteOrder/:orderNo',client.deleteOrder);
app.post('/customerInsert',client.order);


//These are routers fror admin
app.delete('/deleteCustomer/:id',admin.deleteCustomer);
app.get('/viewAllCustomer',admin.viewAllCustomer);
app.get('/customer:id',admin.viewCustomer);
app.delete('/deleteO/:orderNo',admin.deleteO);
app.get('/pendingOrder',admin.pendingOrder);
app.get('/waitingOrder',admin.waitingOrder);
app.get('/collected',admin.collected);
//app.use('/api', router);
