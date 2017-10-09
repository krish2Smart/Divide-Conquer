/**
 * 
 */

var renderEvents = {
	"home" : {
		"btn-url" : "home-btn"
	},
	"bookings" : {
		"btn-url" : "bookings-btn"
	},
	"cancellations" : {
		"btn-url" : "cancellations-btn"
	},
	"management" : {
		"btn-url" : "management-btn"
	}
} 

window.addEventListener("load", loadUsers);

function loadUsers() {
	var btn = null;
	if(document.getElementById(renderEvents["home"]["btn-url"]) !== null) {
		btn = document.getElementById(renderEvents["home"]["btn-url"]);
		btn.addEventListener("click", function() {
			document.location.href = "NalaResort?link=Home";
		});
	}
	if(document.getElementById(renderEvents["bookings"]["btn-url"]) !== null) {
		btn = document.getElementById(renderEvents["bookings"]["btn-url"]);
		btn.addEventListener("click", function() {
			document.location.href = "NalaResort?link=Bookings";
		});
	}
	if(document.getElementById(renderEvents["cancellations"]["btn-url"]) !== null) {
		btn = document.getElementById(renderEvents["cancellations"]["btn-url"]);
		btn.addEventListener("click", function() {
			document.location.href = "NalaResort?link=Cancellations";
		});
	}
	if(document.getElementById(renderEvents["management"]["btn-url"]) !== null) {
		btn = document.getElementById(renderEvents["management"]["btn-url"]);
		btn.addEventListener("click", function() {
			document.location.href = "NalaResort?link=Management";
		});
	}
}

