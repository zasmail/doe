<!-- begin hide from old browsers

/*
function validateEmailAddress(emailAddr) {
//    return (/^\w+([\.|'|-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value));
    return (/^\w+([\.|'|-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/.test(value));
}
*/
/*('Internet Email', 'commentor_id', 'required', 'singleEmail')*/
var emailFields = new Array();

function findFirstNodeWithID( node, id ) {

	var n = null;
	var n2 = null;
	if( node != null ) {
		if( node.id == id ) {
			return node;
		}

		n = node.firstChild;
		if( n != null ) {
			n2 = findFirstNodeWithID( n, id );
			if( n2 != null ) return n2;
		}

		n = node.nextSibling;
		if( n != null ) return findFirstNodeWithID( n, id );

	}
	return null;
}

function checkEmailsForFieldId( fieldName, id, parentId, fieldStatus, numOfEmails ) {
		
	var node = null;
	var parent = document.getElementById(parentId);
	if( parent != null ) {
		node = findFirstNodeWithID( parent, id );
		if( node != null ) {
			return checkEmailsValue(fieldName, node.value,fieldStatus,numOfEmails);
		} 
	}
	alert("Missing field for checking email");
	return false;
}

function checkEmailFields() {
      var ok = true;
      var i = 0;
      while ( ( i < emailFields.length ) && ok ) {
            ok = checkEmails(emailFields[i][0],emailFields[i][1],emailFields[i][2],emailFields[i][3]);
            i++;
      }
      return ok;
}

//Validates multiple email addresses in an Email field
function checkEmails(fieldName,emailAddr,fieldStatus,numOfEmails) {
	
	var element = document.getElementById(emailAddr);
	
	if( element == null ) {
		alert("Internal error: Email file not found");
	}
	return checkEmailsValue(fieldName,element.value,fieldStatus,numOfEmails);
}

function checkEmailsValue(fieldName,email,fieldStatus,numOfEmails) {
	
	if ( email == null ) {
		alert("Internal error: Missing email value");
	}
	   // replace comma spaces with just a comma
	   var emailValue = email.replace(/,\s+/g,',').replace(/\s+,/g,',').replace(/\s+$/g,'').replace(/^\s+/g,'');

	   var emailAddresses = emailValue.split(",");
	   
	   if (fieldStatus == "required") {
		   if ( emailValue == "" ) {	//Required field yet no email entered
			   alert(fieldName + " is a required field")
			   return (false)
		   }
	   } else if ( emailValue == "" ) {	//not a required field and no email entered
		   return (true)
	   }

	   var i = 0;

	   var msg = "\nPlease enter an email address.\n";
	
	   if (numOfEmails == "singleEmail") {
	      if (emailAddresses.length > 1) {
		 alert("Too many email addresses. Please enter only one email address in " + fieldName + "." + "\nIf you have a comma at the end of the line, please remove it.")
		 return(false)
	      }
	   }
	   else {
	     msg = msg + "You must use a comma between email addresses."
	   }
	      for (i = 0; i < emailAddresses.length; i++) {
	
		  if (!(/^\w+([\.|'|-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/.test(emailAddresses[i]))) {
	//        if (!validateEmailAddress(emailAddresses[i])) {              //Invalid Email
		    alert("Invalid " + fieldName + " address: " + emailAddresses [i] +  msg + "\nIf you have a comma at the end of the line, please remove it.")
		    return (false)
		} //end inner if
	      }  //end for loop
	//alert("end of function")
	 return (true)
} //end function

// end hide from old browsers -->