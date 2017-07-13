/**
 * 
 */

window.addEventListener("load", checkCookie);

function checkCookie() {
	AJAXRequest("CheckCookie", loadUsers);
}

function loadUsers(datas) {
	if(datas.code == 1) {
		document.location.href = "Register?option=Home";
	} else {
		var login = document.getElementById("login-sub");
		var errMsg = document.getElementById("error-message");
		login.addEventListener("click", function() {
			var userName = document.getElementById("username").value, userName_flag = 1;
			var password = document.getElementById("password").value, password_flag = 1;
			if(userName.length == 0) {
				errMsg.innerHTML = "Please enter username";
				userName_flag = 0;
			} else if(password.length == 0) {
				errMsg.innerHTML = "Please enter password";
				password_flag = 0;
			} else if(userName_flag == 1 && password_flag == 1) {
				errMsg.style.display = "none";
				AJAXRequest("CheckLogin", checkLogin, "username="+encodeURIComponent(userName)+"&password="+encodeURIComponent(password));
			}
		});
	}
}

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

function checkLogin(datas) {
	var errMsg = document.getElementById("error-message");
	if(datas.code == 1) {
		errMsg.style.display = "none";
		document.location.href = "Register?option=Home";
	} else {
		errMsg.style.display = "block";
		errMsg.innerHTML = datas.message;
	}
}


