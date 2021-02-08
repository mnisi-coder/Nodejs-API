var connection = require('../Config/conn'); 
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

/*//this will automatically take you to the login page
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/login.js'));
});*/

// for action

exports.login = async function(request, response) {

    var email = request.body.email;
    var password = request.body.password;
	//var Roles = request.body.Roles;
	console.log(email);
	console.log(password);

	
	
    if (email && password) {
	  //check if user exists
        connection.query('SELECT * FROM users WHERE email = ?', [email], function(error, results, fields) {
            if (results.length > 0) {
				
				
				
				//this creates a token for the login session
				
				bcrypt.compare(password, results[0].Password, (err,res) => {
					if(err)
					{
						/*return res.Status(401).json({
							message: 'wrong password'
							
							
						});*/
						
						res.send('wrong password');
					}else{
						
						const token = jwt.sign(
						{   name: results[0].Name,
							Email : results[0].Email,
							Roles : results[0].Roles
							
							},
							'login',
							{
								expiresIn: "1h"
							}
						);
						
						//res.send(token);
						console.log(token)
					   
						if(results[0].Roles == "customer")
						{
							response.redirect('/Customer');
							//res.send('Customer PAge');
							console.log('Customer PAge');
						}else{
							//response.redirect('/Admin');
							//res.send('Admin Page');
							console.log('Admin Page');
						}
						
					}//end of if for searching for password
				});
				
				
				
				
				
				
				
				 
            } else {
                response.send('Incorrect Email ');
            }           
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
		
        response.end();
    }
}