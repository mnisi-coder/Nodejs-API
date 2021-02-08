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
			var number = Math.floor(Math.random() * 10) + 1);
			var join = shopName.substring(0,3);
			var custID = join + number;
			
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
								var fullName = request.body.fullName;
								
								var spaceLine = fullName.indexOf(' ');
							
								var name = fullName.substring(0, spaceLine);
								var len = fullName.lenght;
								var surname = fullName.slice(spaceLine,len);
								
								var user={
									"name":name,
									"surname":surname,
									"email":request.body.Email,
									"cellPhone":request.body.CellNo,
									"password":hash
									
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







exports.apply =async function(request, response) {
	
		
	var email = request.body.Email;
    var password = request.body.Password;
	var name = request.body.fullName;
	var cellNo = request.body.cellNo;
	var shopName = request.body.shopName;
	var add = request.body.address;
	
	console.log(name);
	console.log(email);
	console.log(password);
	console.log(cellNo);
	console.log(shopName);
	
	
    if (email && password && name && role) {
    // check if user exists
	
	/*const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
			
			if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
		  {
			response.send('correct email format');
		  }else{
			response.send("You have entered an invalid email address!");
			
		  }*/
		  
			var number = Math.floor(Math.random() * 10) + 1);
			var join = shopName.substring(0,3);
			var shopId = join + number;
			
			connection.query('SELECT * FROM shop WHERE shopID = ?', [shopId], function(error, results, fields) {
            if (results.length > 0)
			{
                response.send('SHOPID ALREADY EXISTS');
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
								var status ='PENDING';
								var today = new Date();
								var fullName = request.body.fullName;
								
								var spaceLine = fullName.indexOf(' ');
							
								var name = fullName.substring(0, spaceLine);
								var len = fullName.lenght;
								var surname = fullName.slice(spaceLine,len);
								
								var owner={
									"shopID":shopId,
									"shopName":request.body.shopName,
									"ownerName":name,
									"ownerSurname":surname,
									"email":request.body.Email,
									"cellPhone":request.body.cellNo,
									"address":request.body.address,
									"password":hash,
									"status":status
								}
								
								
								
								connection.query('INSERT INTO shop SET ?',[shopOwner], function (error, results, fields) {
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