/**
 * 
 */
/**
 * 
 */
var  name_flag = 1, email_flag = 1,mobNo_flag = 1, rollNo_flag = 1;
var renderHTML = {
	"error" : "<div id='error-message'></div>",
	"feedback" : {
		"actionurl" : "feedback",
		"controls" : [
			{
				"required" : "yes", "name": "Name *", "type" : "text", "placeholder" : "Enter your name", "id" : "name", "func" : "checkName()", "span" : "<span id = 'error-messagename'></span>"
			}, 
			{
				"required" : "yes", "name": "Email address *", "type" : "text", "placeholder" : "Enter your email id", "id" : "emailId", "func" : "checkMail()", "span" : "<span id = 'error-messagemail'></span>"
			}, 
			{
				"required" : "no", "name": "Mobile Number", "type" : "text", "placeholder" : "Enter your mobile number", "id" : "mobNo", "func" : "checkNo()", "span" : "<span id = 'error-messageno'></span>"
			}, 
			{
				"required" : "no", "name": "Roll No", "type" : "text", "placeholder" : "Enter your roll no", "id" : "rollNo", "func" : "checkRollNo()", "span" : "<span id = 'error-messagerollno'></span>"
			}, 
			{
				"required" : "yes", "name": "Feedback *", "type" : "textarea", "placeholder" : "Enter your feedback here", "id" : "feedback", "func" : ""
			},
			{
				"required" : "yes", "type" : "submit", "value" : "Send feedback", "id" : "sbmt-feedback"
			}
		],
		"buttontext" : "feedback",
		"action" : function() {
			var name = document.getElementById("name").value;
			var emailId = document.getElementById("emailId").value;
			var feedback = document.getElementById("feedback").value;
			var mobNo = document.getElementById("mobNo").value;
			var rollNo = document.getElementById("rollNo").value;
			var errMsg = document.getElementById("error-message");
			if(name_flag == 1 && email_flag == 1 && feedback.length !== 0) {
				AJAXRequest("FeedbackDB",hideForm,"name="+name+"&emailId="+emailId+"&mobNo="+mobNo+"&rollNo="+rollNo+"&feedback="+feedback);
			}
		}
	}
};

function checkName()
{
	name_flag = 1;
	var errMsg = document.getElementById("error-messagename");
	var name = document.getElementById("name").value, name_regex = /^[a-zA-z ]{1,}$/;
	if(!name.match(name_regex)){
		name_flag = 0;
		if(name.length !==0) {
			errMsg.style.color = "red";
			errMsg.innerHTML = "*Name is invalid";
			errMsg.style.display = "block";
		}
	}
	else
	{
	errMsg.style.display = "none";
	}
}
function checkMail()
{
	email_flag = 1;
	var errMsg = document.getElementById("error-messagemail");
	var emailId = document.getElementById("emailId").value, email_regex = /^([a-zA-Z0-9\.\-]{1,})@([a-zA-Z0-9\.\-]{1,}).([a-z]{2,4})$/;
	if(!emailId.match(email_regex)){
		email_flag = 0;
		if(emailId.length !==0) {
			errMsg.style.color = "red";
			errMsg.innerHTML = "*Email Id is invalid";
			errMsg.style.display = "block";
		}
	}
	else
	{
	errMsg.style.display = "none";
	}
}
function checkNo()
{
	mobNo_flag = 1;
	var errMsg = document.getElementById("error-messageno");
	var mobNo = document.getElementById("mobNo").value, mobNo_regex = /^[0-9]{10}$/;
	if(!mobNo.match(mobNo_regex)){
		mobNo_flag = 0;
		if(mobNo.length !==0) {
			errMsg.style.color = "red";
			errMsg.innerHTML = "*Mobile number is invalid";
			errMsg.style.display = "block";
		}	
	}
	else
	{
	errMsg.style.display = "none";
	}
}
function checkRollNo()
{
	rollNo_flag = 1;
	var errMsg = document.getElementById("error-messagerollno");
	var rollNo = document.getElementById("rollNo").value, rollNo_regex = /^([0-9]{2})([a-zA-Z]{1})([0-9]{3})$/;
	if(!rollNo.match(rollNo_regex)){
		rollNo_flag = 0;
		if(rollNo.length !==0) {
			errMsg.style.color = "red";
			errMsg.innerHTML = "*Roll number is invalid";
			errMsg.style.display = "block";
		}	
	}
	else
		{
		errMsg.style.display = "none";
		}
}
function AJAXRequest(url, func, args) {
	if(args === undefined)
		args="";
	var xhr = new XMLHttpRequest();
	xhr.open("Post",url,true);
	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	xhr.send(args);
	func();
}

function hideForm() {
		elem =document.getElementById("feed-btn");
		elem.style.display = "block";
		alert("Feedback sent");
}
function cancel()
{
	elem =document.getElementById("feed-btn");
	elem.style.display = "block";
	insertHome();
}

function feedbackForm() {
	var elem =document.getElementById("feed-btn");
	elem.style.display = "none";
	var form = "<div class=\"container\">";
	form += "<div class=\"title\">Feedback Form</div>\n";
	form += "<div class=\"border\"></div>\n";
	form += "<form>\n";
	form += "<div class=\"form-dis\">\n";
	form += "<table>\n";
	var ctrls = renderHTML["feedback"]["controls"];
	var i;
	for(i = 0; i < ctrls.length-1; i++) {
		if(ctrls[i]["type"] == "text") {
			if(ctrls[i]["required"] == "yes") {
				form += '<tr><td>'+ctrls[i]["name"]+'</td><td><input type="'+ctrls[i]["type"]+'" placeholder="'+ctrls[i]["placeholder"]+'" id="'+ctrls[i]["id"]+'" required onchange = "'+ctrls[i]["func"]+'">'+ctrls[i]["span"]+'</td></tr>\n';
			} else {
				form += '<tr><td>'+ctrls[i]["name"]+'</td><td><input type="'+ctrls[i]["type"]+'" placeholder="'+ctrls[i]["placeholder"]+'" id="'+ctrls[i]["id"]+'" onchange = "'+ctrls[i]["func"]+'">'+ctrls[i]["span"]+'</td></tr>\n';
			}	
		} else {
			form += '<tr><td>'+ctrls[i]["name"]+'</td><td><textarea placeholder="'+ctrls[i]["placeholder"]+'" id="'+ctrls[i]["id"]+'" required></textarea></td></tr>\n';
		}
	}
	form += "</table>\n";
	form += "</div>\n";
	form += renderHTML["error"];
	form += '<div><input type="'+ctrls[5]["type"]+'" value="'+ctrls[5]["value"]+'" id="'+ctrls[5]["id"]+'"><input id="sbmt-feedback" type="button" value="cancel" onclick="cancel()"></div>\n';
	form += "</form>\n";
	form += "<div class=\"border\"></div>\n";
	form += "</div>";
	var elem = document.getElementById("content-holder");
	elem.innerHTML = form;
	elem.style.display = "block";
	errMsg = document.getElementById("error-message");
	errMsg.style.display = "none";
	window.scrollTo(0, 250);
	document.getElementById("sbmt-"+renderHTML["feedback"]["actionurl"]).addEventListener("click",renderHTML["feedback"]["action"]);
}
