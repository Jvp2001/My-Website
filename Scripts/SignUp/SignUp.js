var inputs = document.getElementsByTagName("input");
var getInputs = function()
{
	for (var i = 0; i < inputs.length;i++)
	{
		var currentId = inputs[i].id;
		alert(currentId);
		switch(currentId)
		{
			case "email":
				alert(currentId); 
		}
	}
}

var info = {};

function getId(id)
{
	return document.getElementById(id);
}
var inputs = document.getElementsByTagName("input");
function SignUp()
{
	var pass;
	for (var i = 0; i < inputs.length; i++) 
	{
		switch (inputs[i].id) {
			case "email":
				// statements_1
				info["EmailAddress"] = inputs[i].value; 
			case "FirstName":
				// statements_2
				info["FirstName"] = inputs[i].value; 
				break;
			case "LastName":
				// statements_3
				info["LastName"] = inputs[i].value; 
			case "Pass":
				pass = inputs[i].value;
				console.log(pass);
			case "RePass":
				// statements_5
				console.log(inputs[i].value);
				if(inputs[i].value === pass)
					{ 
						console.log('here');
						info["Password"] = inputs[i].value;
						clear();

					}
				else
					alert("Please check the passwords and try again.");
					break;
			default:
				// statements_def
				break;
		}
	}
	

}

function clear()
{
	for (var i = 0; i < inputs.length; i++) 
	{
		var currentItem = inputs[i];
		if(currentItem.type === "text" || currentItem.type === "password")
		{
			currentItem.value = "";
		}
	};

}