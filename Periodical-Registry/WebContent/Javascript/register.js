/**
 * 
 */

function AJAXRequest(url, func, args) {
	if(args === undefined) 
		args= "";
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(args);
	xhr.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			func(JSON.parse(this.responseText));
		}
	};
}

window.addEventListener("load", function(){
	AJAXRequest("CheckCookie", checkCookie);
});

function checkCookie(datas) {
	if(datas.code == 1) {
		loadEvents();
	} else {
		window.location.href = "login.html";
	}
}

function loadEvents() {
	var btn;
	if(document.getElementById("home-btn") !== null) {
		btn = document.getElementById("home-btn");
		btn.addEventListener("click", function() {
			alert("code in process");
			window.location.href = "Register?option=Home";
		});
	}
	if(document.getElementById("create-register-btn") !== null) {
		btn = document.getElementById("create-register-btn");
		btn.addEventListener("click", function() {
			window.location.href = "Register?option=Create-Register";
		});
	}
	if(document.getElementById("register-entry-btn") !== null) {
		btn = document.getElementById("register-entry-btn");
		btn.addEventListener("click", function() {
			window.location.href = "Register?option=Register-Entry";
		});
	}
	if(document.getElementById("renewal-dates-btn") !== null) {
		btn = document.getElementById("renewal-dates-btn");
		btn.addEventListener("click", function() {
//			alert("code in process");
			window.location.href = "Register?option=Renewal-Dates";
		});
	}	
	if(document.getElementById("settings-btn") !== null) {
		btn = document.getElementById("settings-btn");
		btn.addEventListener("click", function() {
			alert("code in process");
			//window.location.href = "Register?option=Settings";
		});
	}	
	if(document.getElementById("logout-btn") !== null) {
		btn = document.getElementById("logout-btn");
		btn.addEventListener("click", function() {
			alert("code in process");
		});
	}
}

