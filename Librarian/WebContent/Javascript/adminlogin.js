/**
 * 
 */
window.addEventListener("load",checkCookie);

function checkCookie() {
	AJAXRequest("CheckCookie", loadUsers, "check=admin");	
}

function loadUsers(datas) {
	if(datas.code == 1) {
		document.location.href = "AdminPage?option=Settings";
	} else {
		var login = document.getElementById("login-btn"); 
		login.addEventListener("click",function() {	
			var userName = document.getElementById("username").value, userName_flag = 1;
			var password = document.getElementById("password").value, password_flag = 1;
			var errMsg = document.getElementById("error-message");
			if(userName.length == 0) {
				errMsg.innerHTML = "Please enter Username";
				userName_flag = 0;
			} else if (password.length == 0) {
				errMsg.innerHTML = "Please enter Password";
				password_flag = 0;
			}
			
			if(userName_flag == 1 && password_flag == 1) {
				errMsg.style.display = "none";
				AJAXRequest("CheckLogin",checkLogin, "userName="+encodeURIComponent(userName)+"&password="+encodeURIComponent(password));
			} else {
				errMsg.style.display = "block";
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
		document.location.href = "AdminPage?option=Settings";
	} else {
		errMsg.innerHTML = datas.message;
		errMsg.style.display = "block";
	}
}