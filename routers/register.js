var connection = require('../Config/conn'); 
// require the bcrypt module
var bcrypt = require('bcrypt');


exports.register =async function(request, response) {
	
		
	var email = request.body.Email;
    var password = request.body.Password;
	var name = request.body.Name;
	var role = request.body.Roles;
	
	
	
	console.log(name);
	console.log(email);
	console.log(password);
	console.log(role);
	
	
	
    if (email && password && name && role) {
    // check if user exists
	
	/*const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
			
			if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
		  {
			response.send('correct email format');
		  }else{
			response.send("You have entered an invalid email address!");
			
		  }*/
  
			
			connection.query('SELECT * FROM users WHERE Email = ?', [email], function(error, results, fields) {
            if (results.length > 0)
			{
                response.send('User Already has an account');
            }else{
				//if the user is found
				
				bcrypt.hash(request.body.Password, 10, (err,hash) => {
					
					if(err)
					{
						return res.status(500).json({
							error : err
						});
					}else
					{
									var today = new Date();
								var user={
									"name":request.body.Name,
									"email":request.body.Email,
									"password":hash,
									"Roles":request.body.Roles,
									
								}
								
								
								
								connection.query('INSERT INTO users SET ?',[user], function (error, results, fields) {
								  if (error) {
									/*res.json({
										status:false,
										message:'there are some error with query'
										
									})*/
									response.send('there are some error with query');
									
								  }else{
									  /*res.json({
										status:true,
										data:results,
										message:'user registered sucessfully'
										
									})*/
									response.send('user registered sucessfully');
									
								  }
								});
							
						
					}//end of if statement for hahing the password
				});
				
					
				
				
				
				
			}		//end of the if when the user is found		
	
		
 
		});//end of searching for a user
		
		
	} else{
	response.send('Please enter values');	
	}
	
	
	
}