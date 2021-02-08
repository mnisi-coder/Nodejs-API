var connection = require('../Config/conn'); 

//rest api to get a single ORDER data
exports.viewOrder = async function(request, response) {
   connection.query('select * from ordertable where email=?', [request.params.email], function (error, results, fields) {
	  if (error) throw error;
	  response.send(results);
	});
}


//REST API TO DELETE ORDER
exports.deleteOrder = async function(request, response) {
   //console.log(req.body);
   connection.query('DELETE FROM ordertable where orderNo=?', [request.params.orderNo], function (error, results, fields) {
	  if (error) throw error;
	  response.send('Record has been deleted!');
	});
}


//rest api to create a new order into mysql database
exports.order = async function(request, response) {
   var params  = request.body;
   console.log(params);
   connection.query('INSERT INTO ordertable SET ?', params, function (error, results, fields) {
	  if (error) throw error;
	  response.send(results);
	});
}



//rest api to update user email
exports.update = async function(request, response) {
   var email  = request.body.Email;
   var id  = request.body.id;
   
   console.log(params);
   connection.query('UPDATE user SET email = ?  WHERE id = ?', [email, id], function (error, results, fields) {
	  if (error) throw error;
	  response.send(results);
	});
}


