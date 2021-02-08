//admmmin can delete a userAgent
var connection = require('../Config/conn'); 


exports.deleteCustomer = async function(request, response) {
   //console.log(req.body);
   connection.query('DELETE FROM users where id=?', [request.params.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end('User has been deleted!');
	});
}

//These are the things the admin can do for order

//REST API TO GET ALL users
exports.viewAllCustomer = (request, response)=> {
   connection.query('SELECT * FROM users', function (error, results, fields) {
	 if (!results) {
		 console.log("Oops... Something went wrong");
	 }else{
		  //response.send({data:'view users'});
		  response.send(results);
			
			//response.send(JSON.stringify(results));
	  }
	});
}



//rest api to get a single ORDER data
exports.viewCustomer = (request, response) =>{
   connection.query('select * from ordertable where orderNo=?', [request.params.id], function (error, results, fields) {
	  if (error) throw error;
	  response.send(results);
	});
}


//REST API TO DELETE ORDER
exports.deleteO = async function(request, response) {
   //console.log(req.body);
   connection.query('DELETE FROM ordertable where orderNo=?', [request.params.orderNo], function (error, results, fields) {
	  if (error) throw error;
	  response.send('Record has been deleted!');
	});
}




//REST API TO GET ORDERS WERE THE STATUS IS PENDING   ORDERS
exports.pendingOrder = async function(request, response) {
   connection.query("select * from ordertable WHERE orderStatus = 'pending'", function (error, results, fields) {
	  if (error) throw error;
	  response.send(results);
	});
}


//REST API TO GET ORDERS WERE THE STATUS IS WAITINNG COLECTION
exports.waitingOrder = async function(request, response) {
   connection.query("select * from ordertable WHERE orderStatus = 'waiting'", function (error, results, fields) {
	  if (error) throw error;
	  response.send(results);
	});
}


//REST API TO GET ORDERS WERE THE STATUS IS COLLECTED
exports.collected = async function(request, response) {
   connection.query("select * from ordertable WHERE orderStatus = 'collected'", function (error, results, fields) {
	  if (error) throw error;
	  response.send(results);
	});
}


