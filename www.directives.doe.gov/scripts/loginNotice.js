// loginNotice.js
// This script writes out a login confirmation snippet for the individual role login pages.
// If there is no confirmation required for that customers RevCom, this can be blank.
// 

var answer = confirm("* * * NOTICE TO USERS * * *  \n\nThis is a Federal computer system and is the property of the United States Government. It is for authorized use only. Users (authorized or unauthorized) have no explicit or implicit expectation of privacy.\n\nAny or all uses of this system and all files on this system may be intercepted, monitored, recorded, copied, audited, inspected, and disclosed to authorized site, Department of Energy, and law enforcement personnel, as well as authorized officials of other agencies, both domestic and foreign. By using this system, the user consents to such interception, monitoring, recording, copying, auditing, inspection, and disclosure at the discretion of authorized site or Department of Energy personnel.\n\nUnauthorized or improper use of this system may result in administrative disciplinary action and civil and criminal penalties. By continuing to use this system you indicate your awareness of and consent to these terms and conditions of use. LOG OFF IMMEDIATELY if you do not agree to the conditions stated in this warning.")
if (answer){
	//alert("Positive Response.");
} else {
	//alert ("Negative Response.")
	window.location = "http://directives.doe.gov/";
}
