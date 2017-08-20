/**
 * 
 */

window.addEventListener("load", loadUsers);

function loadUsers() {
	AJAXRequest("GetFrom", fetchAddress);
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

function fetchAddress(datas) {
	var elem = document.getElementById("from-address");
	var HTMLContent;
	if(datas.length == 0) {
		HTMLContent = "<option>No address</option>";
	} else {
		for(var i = 0; i < datas.length; i++) {
			HTMLContent += "<option>"+datas[i]+"</option>";
		}
	}
	elem.innerHTML = HTMLContent;
}


