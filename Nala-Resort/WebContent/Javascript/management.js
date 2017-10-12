/**
 * 
 */
var occupancyID = 0;

var renderManagement = {
	"login" : {
		"username" : {
			"actionurl" : "management-username"
		},
		"password" : {
			"actionurl" : "management-password"
		},
		"login" : {
			"actionurl" : "management-login-btn"
		},
		"actionurl" : "management",
		"action" : function() {
			var username = document.getElementById(renderManagement["login"]["username"]["actionurl"]).value;
			var password = document.getElementById(renderManagement["login"]["password"]["actionurl"]).value;
			
			var errMsg = document.getElementById("error-message");
			var form = document.getElementById("form-container");
			
			if(username.length === 0) {
				errMsg.innerHTML = "Please enter the username";
				errMsg.style.display = "inline-block";
				form.style.height = "220px";
			} else if(password.length === 0) {
				errMsg.innerHTML = "Please enter the password";
				errMsg.style.display = "inline-block";
				form.style.height = "220px";
			} else {
				errMsg.style.display = "none";
				form.style.height = "200px";
				AJAXRequest("CheckLogin", renderManagement["login"]["navigate"], "username="+username+"&password="+password);
			}
		},
		"navigate" : function(datas) {
			if(datas.code == 1) {
				document.location.href = "NalaResort?link=Management/Stay-Details";
			}
		}
	},
	"stay-details" : {
		"actionurl" : "stay-details",
		"listurl" : "stay-details-list",
		"logout" : {
			"actionurl" : "stay-details-logout-btn",
			"action" : function() {
				AJAXRequest("Logout", renderManagement["stay-details"]["logout"]["navigate"]);
			},
			"navigate" : function(data) {
				if(data.code == 1) {
					document.location.href = "NalaResort?link=Management";
				}
			}
		},
		"action" : function(roomDatas) {
			var i, temp;
			var elem = document.getElementById(renderManagement["stay-details"]["actionurl"]+"-content");
			var HTMLContent = "<table class=\"stay-details-tbl\">";
				if(roomDatas.length == 0)
					HTMLContent += "<tr class=\"no-notifications\"><td>No notifications</td></tr>";
				else {
					HTMLContent += "<tr><td>Person name</td><td>Room no</td><td>Check in</td><td>Check out</td><td>Phone No</td><td><a>view</a></td></tr>";
					for(i = 0; i < roomDatas.length; i++) {
						if(roomDatas[i].id == occupancyID) {
							HTMLContent += "<div class=\"display-content\">";
							HTMLContent += "<ul>";
							HTMLContent += "<li><p id=\"display-person-name\">Person Name : "+roomDatas[i].personName+"</p></li>";
							HTMLContent += "<li><p id=\"display-aadhar-no\">Aadhar No : "+roomDatas[i].aadharNo+"</p></li>";
							HTMLContent += "<li><p id=\"display-check-in\">Check In : "+roomDatas[i].checkIn+"</p></li>";								
							HTMLContent += "<li><p id=\"display-check-out\">Check Out : "+roomDatas[i].checkOut+"</p></li>";
							HTMLContent += "<li><p id=\"display-phone-no\">Phone No : "+roomDatas[i].phoneNo+"</p></li>";
							HTMLContent += "<li><p id=\"display-mail-id\">Email ID : "+roomDatas[i].mailID+"</p></li>";
							HTMLContent += "<li><p id=\"display-amount-paid\">Amount Paid : "+roomDatas[i].amountPaid+"</p></li>";
							HTMLContent += "<li><p id=\"display-price\">Price : "+roomDatas[i].price+"</p></li>";								
							HTMLContent += "<li><p id=\"display-booked-at\">Booked At : "+roomDatas[i].bookedAt+"</p></li>";
							HTMLContent += "</ul><br>";
							HTMLContent += "</div>"
							HTMLContent += "<div id = \"display-services\">"
							HTMLContent += "<span id=\"display-services-title\">Services Requested : </span>";
							HTMLContent += "<ul>";
							if(roomDatas[i].dryCleaning === true)
								HTMLContent += "<li><span id=\"display-dry-cleaning\">Dry Cleaning</span></li>";
							if(roomDatas[i].laundryFacilities === true)
								HTMLContent += "<li><span id=\"display-laundry-facilities\">Laundry Facilities</span></li>";
							if(roomDatas[i].freeNewspapers === true)
								HTMLContent += "<li><span id=\"display-free-newspapers\">Free Newspapers</span></li>";
							if(roomDatas[i].dryCleaning === false && roomDatas[i].laundryFacilities === false && roomDatas[i].freeNewspapers === false) {
								HTMLContent += "<li><span id=\"display-no-services\">No Services requested</li>";
							}
							HTMLContent += "<ul>";
							HTMLContent += "</div>";
						} else {
							HTMLContent += "<tr><td>"+roomDatas[i].personName+"</td><td>"+roomDatas[i].roomNo+"</td><td>"+roomDatas[i].checkIn+"</td><td>"+roomDatas[i].checkOut+"</td><td>"+roomDatas[i].phoneNo+"</td><td><a class="+renderManagement["stay-details"]["listurl"]+" data-target="+roomDatas[i].id+" href=\"#\" >view</a></td></tr>";
						}
					}
				}
				HTMLContent += "</table>";
				elem.innerHTML = HTMLContent;
				var viewDetails = document.getElementsByClassName(renderManagement["stay-details"]["listurl"]);
				for(i = 0; i < viewDetails.length; i++) {
					viewDetails[i].addEventListener("click", function() {
						occupancyID = this.getAttribute("data-target");
						renderManagement["stay-details"]["action"](roomDatas);
				});
			}
		}
	}
}


window.addEventListener("load", function() {
	AJAXRequest("CheckCookie", checkCookie);
});

function checkCookie(datas) {
	if(datas.code == 1) {
		if(document.getElementById(renderManagement["login"]["actionurl"]+"-container") !== null) {
			alert("Already you have logged in, we redirecting to room details");
			document.location.href = "NalaResort?link=Management/Stay-Details";
		}
		setActive();
	} else if(document.getElementById(renderManagement["stay-details"]["actionurl"]+"-container") !== null) {
		alert("Please Log in");
		document.location.href = "NalaResort?link=Management";
	} else {
		setActive();
	}
}

function setActive() {
	var elem = document.getElementById("management-nav");
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
	if(document.getElementById(renderManagement["login"]["login"]["actionurl"]) !== null) {
		btn = document.getElementById(renderManagement["login"]["login"]["actionurl"]);
		btn.addEventListener("click", renderManagement["login"]["action"]);
	}
	
	if(document.getElementById(renderManagement["stay-details"]["actionurl"]+"-container") !== null) {
		AJAXRequest("GetStayDetails", renderManagement["stay-details"]["action"]);
	}
	
	if(document.getElementById(renderManagement["stay-details"]["logout"]["actionurl"]) !== null) {
		btn = document.getElementById(renderManagement["stay-details"]["logout"]["actionurl"]);
		btn.addEventListener("click", renderManagement["stay-details"]["logout"]["action"]);
	}
}

