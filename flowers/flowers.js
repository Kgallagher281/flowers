function validateForm() {
 var name = document.forms["myForm"]["name"].value;
		  var phone = document.forms["myForm"]["phone"].value;
		  var email = document.forms["myForm"]["email"].value;
		  var subject = document.forms["myForm"]["subject"].value;
		  var message = document.forms["myForm"]["message"].value;
		    
 if (name == "" || phone == ""|| email== "" || subject == "" || message == ""  ) {
            alert("please fill all feilds");
            return false; 
  }
}