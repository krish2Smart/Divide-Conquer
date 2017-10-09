/**
 * 
 */

var renderCancellations = {
	"actionurl" : "cancellations",
	"email-id" : {
		"actionurl" : "cancellations-email-id"
	},
	"booking-reference-id" : {
		"actionurl" : "cancellations-booking-reference-id"
	},
	"otp" : {
		"actionurl" : "cancellations-otp",
		"send" : {
			"actionurl" : "cancellations-send-otp",
			"message" : function(datas) {
				if(datas.code == 1){ 
					var disMsg = document.getElementById("display-message");
					var form = document.getElementById("form-container");
					
					disMsg.innerHTML = datas.message;
					disMsg.style.display = "inline-block";
					form.style.height = "230px";
				} else {
					var errMsg = document.getElementById("error-message-1");
					var form = document.getElementById("form-container");
					
					errMsg.innerHTML = datas.message;
					errMsg.style.display = "inline-block";
					form.style.height = "240px";
				} 
			},
			"action" : function() {
				var emailID = document.getElementById(renderCancellations["email-id"]["actionurl"]).value, emailID_regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, emailID_flag = 1;
				var bookingReferenceID = document.getElementById(renderCancellations["booking-reference-id"]["actionurl"]).value, bookingReferenceID_flag = 1;
				
				var errMsg = document.getElementById("error-message-1");
				var form = document.getElementById("form-container");
				
				if(!emailID.match(emailID_regex)) {
					emailID_flag = 0;
					if(emailID.length === 0) {
						errMsg.innerHTML = "Please enter email id";
					} else {
						errMsg.innerHTML = "Please enter valid email id";
					}
				} else if(bookingReferenceID.length === 0) {
					bookingReferenceID_flag = 0;
					errMsg.innerHTML = "Please enter the booking reference ID";
				}
				
				if(emailID_flag === 1 && bookingReferenceID_flag === 1) {
					errMsg.style.display = "none";
					form.style.height = "210px";
					AJAXRequest("CheckCancellations", renderCancellations["otp"]["send"]["message"], "email-id="+encodeURIComponent(emailID)+"&booking-reference-id="+encodeURIComponent(bookingReferenceID));
				} else {
					errMsg.style.display = "inline-block";
					form.style.height = "230px";
				}
			}
		},
		"submit" : {
			"actionurl" : "cancellations-submit-otp",
			"message" : function(datas) {
				if(datas.code == 1){ 
					var disMsg = document.getElementById("display-message");
					var form = document.getElementById("form-container");
					
					disMsg.innerHTML = datas.message;
					disMsg.style.display = "inline-block";
					form.style.height = "240px";
				} else {
					var errMsg = document.getElementById("error-message-2");
					var form = document.getElementById("form-container");
					
					errMsg.innerHTML = datas.message;
					errMsg.style.display = "inline-block";
					form.style.height = "240px";
				} 
			},
			"action" : function() {
				var OTP = document.getElementById(renderCancellations["otp"]["actionurl"]).value;
				
				var errMsg = document.getElementById("error-message-2");
				var form = document.getElementById("form-container");
				
				if(OTP.length === 0) {
					errMsg.innerHTML = "Please enter the OTP";
					errMsg.style.display = "inline-block";
					form.style.height = "240px";
				} else {
					errMsg.style.display = "none";
					form.style.height = "210px";
					AJAXRequest("CheckOTP", renderCancellations["otp"]["submit"]["message"], "otp="+OTP);
				}
			}
		}
	}
}

window.addEventListener("load", setActive);

function setActive() {
	var elem = document.getElementById("cancellations-nav");
	elem.setAttribute("class", "active");
	loadEvents();
}

function AJAXRequest(url, func, args) {
	if(args === undefined)
		args = "";
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	xhr.send(args);
	xhr.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			func(JSON.parse(this.responseText));
		}
	};
}

function loadEvents() {
	var btn;
	if(document.getElementById(renderCancellations["otp"]["send"]["actionurl"]) !== null) {
		btn = document.getElementById(renderCancellations["otp"]["send"]["actionurl"]);
		btn.addEventListener("click", renderCancellations["otp"]["send"]["action"]);
	}
	
	if(document.getElementById(renderCancellations["otp"]["submit"]["actionurl"]) !== null) {
		btn = document.getElementById(renderCancellations["otp"]["submit"]["actionurl"]);
		btn.addEventListener("click", renderCancellations["otp"]["submit"]["action"]);
	}
}