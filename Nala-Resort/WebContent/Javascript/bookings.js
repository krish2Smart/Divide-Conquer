/**
 * 
 */

var renderBookings = {
	"actionurl" : "bookings-container",
	"person-name" : {
		"actionurl" : "booking-person-name"
	},
	"aadhar-no" : {
		"actionurl" : "booking-aadhar-no"
	},
	"check-in" : {
		"actionurl" : "booking-check-in",
		"value" : "null",
		"calendar" : {
			"actionurl" : "booking-check-in-calendar",
			"hide" : function() {
				var elem = document.getElementById(renderBookings["check-in"]["calendar"]["actionurl"]+"-container");
				elem.style.display = "none";
			},
			"action" : function() {
				var elem = document.getElementById(renderBookings["check-in"]["calendar"]["actionurl"]+"-container");
				elem.style.display = "block";
				elem = document.getElementById("form-container");
				elem.addEventListener("click", function(event) {
					if(!(document.getElementById(renderCalendar["actionurl"]).contains(event.target)) && !(document.getElementById(renderBookings["check-in"]["actionurl"]).contains(event.target)) && !(document.getElementById(renderBookings["check-in"]["calendar"]["actionurl"]).contains(event.target))) {
						renderBookings["check-in"]["calendar"]["hide"]();
					}
				});
			}
		}
	},
	"check-out" : {
		"actionurl" : "booking-check-out",
		"value" : "null",
		"calendar" : {
			"actionurl" : "booking-check-out-calendar",
			"hide" : function() {
				var elem = document.getElementById(renderBookings["check-out"]["calendar"]["actionurl"]+"-container");
				elem.style.display = "none";
			},
			"action" : function() {
				var elem = document.getElementById(renderBookings["check-out"]["calendar"]["actionurl"]+"-container");
				elem.style.display = "block";
				elem = document.getElementById("form-container");
				elem.addEventListener("click", function(e) {
					if(!(document.getElementById(renderCalendar["actionurl"]).contains(e.target)) && !(document.getElementById(renderBookings["check-out"]["actionurl"]).contains(e.target)) && !(document.getElementById(renderBookings["check-out"]["calendar"]["actionurl"]).contains(e.target))) {
						renderBookings["check-out"]["calendar"]["hide"]();
					}
				});
			}
		}
	},
	"floor-no" : {
		"actionurl" : "booking-floor-no",
		"load" : function(datas) {
			var HTMLContent = "<option disabled selected>Select</option>";
			var i;
			for(i = 0; i < datas.length; i++) {
				HTMLContent += "<option>"+datas[i]+"</option>";
			}
			var elem = document.getElementById(renderBookings["floor-no"]["actionurl"]);
			elem.innerHTML = HTMLContent;
		},
		"change" : function() {
			var floorNo = document.getElementById(renderBookings["floor-no"]["actionurl"]).value;
			var roomType = document.getElementById(renderBookings["room-type"]["actionurl"]).value;
			var errMsg = document.getElementById("error-message");
			var formContainer = document.getElementById("form-container");
			if(floorNo === "Select") {
				errMsg.innerText = "Please select floor no";
				errMsg.style.display = "inline-block";
				formContainer.style.height = "430px";
			} else if(roomType === "Select") {
				errMsg.innerText = "Please select room type";
				errMsg.style.display = "inline-block";
				formContainer.style.height = "430px";
			} else { 
				errMsg.style.display = "none";
				formContainer.style.height = "410px";
				AJAXRequest("GetRoomNo", renderBookings["room-no"]["load"], "floor-no="+encodeURIComponent(floorNo)+"&room-type="+encodeURIComponent(roomType));
			}
		}
	},
	"room-type" : {
		"actionurl" : "booking-room-type",
		"load" : function(datas) {
			var HTMLContent = "<option disabled selected>Select</option>";;
			var i;
			for(i = 0; i < datas.length; i++) {
				HTMLContent += "<option>"+datas[i]+"</option>";
			}
			var elem = document.getElementById(renderBookings["room-type"]["actionurl"]);
			elem.innerHTML = HTMLContent;
		},
		"change" : function() {
			var floorNo = document.getElementById(renderBookings["floor-no"]["actionurl"]).value;
			var roomType = document.getElementById(renderBookings["room-type"]["actionurl"]).value;
			var errMsg = document.getElementById("error-message");
			var formContainer = document.getElementById("form-container");
			if(floorNo === "Select") {
				errMsg.innerText = "Please select floor no";
				errMsg.style.display = "inline-block";
				formContainer.style.height = "430px";
			} else if(roomType === "Select") {
				errMsg.innerText = "Please select room type";
				errMsg.style.display = "inline-block";
				formContainer.style.height = "430px";
			} else {
				errMsg.style.display = "none";
				formContainer.style.height = "410px";
				AJAXRequest("GetRoomNo", renderBookings["room-no"]["load"], "floor-no="+encodeURIComponent(floorNo)+"&room-type="+encodeURIComponent(roomType));
			}
		}
	},
	"room-no" : {
		"actionurl" : "booking-room-no",
		"load" : function(datas) {
			var HTMLContent = "<option disabled selected>Select</option>";;
			var i;
			for(i = 0; i < datas.length; i++) {
				HTMLContent += "<option>"+datas[i]+"</option>";
			}
			var elem = document.getElementById(renderBookings["room-no"]["actionurl"]);
			elem.innerHTML = HTMLContent;
		}
	},
	"services" : {
		"actionurl" : "booking-services"
	},
	"phone-no" : {
		"actionurl" : "booking-phone-no"
	},
	"email-id" : {
		"actionurl" : "booking-email-id"
	},
	"amount-paid-in-advance" : {
		"actionurl" : "booking-amount-paid-in-advance"
	},
	"amount" : {
		"actionurl" : "booking-amount"
	},
	"action" : function() {
		var personName = document.getElementById(renderBookings["person-name"])
	}
}


var selectedDate;
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var renderCalendar = {
	"actionurl" : "null",
	"seturl" : function(actionurl, month_yearurl, monthurl, yearurl, prevurl, nexturl, dateurl, datelisturl, okbtnurl) {
		renderCalendar["actionurl"] = actionurl;
		renderCalendar["month_year"]["actionurl"] = month_yearurl;
		renderCalendar["month_year"]["monthurl"] = monthurl;
		renderCalendar["month_year"]["yearurl"] = yearurl;
		renderCalendar["month_year"]["prev"]["actionurl"] = prevurl;
		renderCalendar["month_year"]["next"]["actionurl"] = nexturl;
		renderCalendar["date"]["actionurl"] = dateurl;
		renderCalendar["date"]["datelisturl"] = datelisturl;
		renderCalendar["ok-btn"]["actionurl"] = okbtnurl;
	},
	"load" : function() {
		var HTMLContent = "<div class = \"month_year-container\" id = "+renderCalendar["month_year"]["actionurl"]+">";
		HTMLContent += "<ul>";
		HTMLContent += "<li><a href = \"#\" class = \"prev\" id = "+renderCalendar["month_year"]["prev"]["actionurl"]+">&#10094;</a></li>";
		HTMLContent += "<li><a href = \"#\" class = \"next\" id = "+renderCalendar["month_year"]["next"]["actionurl"]+">&#10095;</a></li>";
		HTMLContent += "<li class = \"content\"><span class = \"month\" id = "+renderCalendar["month_year"]["monthurl"]+"></span><br><span class = \"year\" id = "+renderCalendar["month_year"]["yearurl"]+"></span></li>"
		HTMLContent += "</ul>";
		HTMLContent += "</div>";
		HTMLContent += "<div class = \"weekdays-container\">";
		HTMLContent += "<ul>";
		HTMLContent += "<li>S</li>";
		HTMLContent += "<li>M</li>";
		HTMLContent += "<li>T</li>";
		HTMLContent += "<li>W</li>";
		HTMLContent += "<li>T</li>";
		HTMLContent += "<li>F</li>";
		HTMLContent += "<li>S</li>";
		HTMLContent += "</ul>";
		HTMLContent += "</div>";
		HTMLContent += "<div class = \"date-container\" id = "+renderCalendar["date"]["actionurl"]+"></div>";
		HTMLContent += "<div class = \"calendar-submit\">";
		HTMLContent += "<input type = \"submit\" value = \"Ok\" class = \"ok-btn\" id = "+renderCalendar["ok-btn"]["actionurl"]+">";
		HTMLContent += "</div>";
		var elem = document.getElementById(renderCalendar["actionurl"]);
		elem.innerHTML = HTMLContent;
	},
	"month_year" : {
		"actionurl" : "null",
		"monthurl" : "null",
		"yearurl" : "null",
		"prev" : {
			"actionurl" : "null",
			"action" : function() {
				var elem = document.getElementById(renderCalendar["month_year"]["monthurl"]);
				var month = elem.getAttribute("data-target") - 1;
				elem = document.getElementById(renderCalendar["month_year"]["yearurl"]);
				var year = elem.getAttribute("data-target");
				var date;
				if(month == 0) {
					date = new Date(year - 1, 11, 1);
				} else {
					date = new Date(year, month - 1, 1);
				}
				if(renderCalendar["actionurl"] === renderBookings["check-out"]["calendar"]["actionurl"]+"-container") {
					renderCalendar["month_year"]["load"](date, renderBookings["check-in"]["value"]);
					renderCalendar["date"]["load"](date, renderBookings["check-in"]["value"]);
				} else {
					renderCalendar["month_year"]["load"](date);
					renderCalendar["date"]["load"](date);
				}
			}
		},
		"next" : {
			"actionurl" : "null",
			"action" : function() {
				var elem = document.getElementById(renderCalendar["month_year"]["monthurl"]);
				var month = elem.getAttribute("data-target") - 1;
				elem = document.getElementById(renderCalendar["month_year"]["yearurl"]);
				var year = elem.getAttribute("data-target");
				var date;
				if(month == 11) {
					date = new Date(++year, 0, 1);
				} else {
					date = new Date(year, month + 1, 1);
				}
				if(renderCalendar["actionurl"] === renderBookings["check-out"]["calendar"]["actionurl"]+"-container") {
					renderCalendar["month_year"]["load"](date, renderBookings["check-in"]["value"]);
					renderCalendar["date"]["load"](date, renderBookings["check-in"]["value"]);
				} else {
					renderCalendar["month_year"]["load"](date);
					renderCalendar["date"]["load"](date);
				}
				
			}
		},
		"load" : function(date) {
			if(date === undefined)
				date = new Date();
			var curMonth = date.getMonth();
			var elem = document.getElementById(renderCalendar["month_year"]["monthurl"]);
			elem.innerText = monthNames[curMonth];
			elem.setAttribute("data-target", curMonth+1);
			var curYear = date.getFullYear();
			elem = document.getElementById(renderCalendar["month_year"]["yearurl"]);
			elem.innerText = curYear;
			elem.setAttribute("data-target", curYear);
		}
	},
	"date" : {
		"actionurl" : "null",
		"datelisturl" : "null",
		"load" : function(date, currentDate) {
			if(date === undefined)
				date = new Date();
			var month = date.getMonth();
			var year = date.getFullYear();
			var today = date.getDate();
			date = new Date(year, month, 1);
			startDay = date.getDay();
			date = new Date(year, month+1, 0);
			var lastDate = date.getDate();
			var lastDay = date.getDay();
			if(currentDate === undefined)
				currentDate = new Date();
			var curMonth = currentDate.getMonth();
			var curDate = currentDate.getDate();
			var curYear = currentDate.getFullYear();
			var HTMLContent = "<ul>";
			for(i = 0; i < startDay; i++)
					HTMLContent += "<li><a href = \"#\"></a></li>";
			for(i = 1; i <= lastDate; i++) {
				if((month < curMonth && year <= curYear) || (year == curYear && month == curMonth && i < curDate) || (year < curYear)) {
						HTMLContent += "<li class = \"date-inactive\"><a>"+i+"</a></li>";
				} else if(i == today) {
					HTMLContent += "<li data-target = "+i+" class = \""+renderCalendar["date"]["datelisturl"]+" selected-date\"><a href = \"#\">"+i+"</a></li>";
					selectedDate = i;
				} else {
					HTMLContent += "<li data-target = "+i+" class = \""+renderCalendar["date"]["datelisturl"]+" unselected-date\"><a href = \"#\">"+i+"</a></li>";
				}
			}
			for(i = lastDay + 1; i <= 6; i++)
				HTMLContent += "<li><a href = \"#\"></a></li>";
			HTMLContent += "</ul>";
			var elem = document.getElementById(renderCalendar["date"]["actionurl"]);
			elem.innerHTML = HTMLContent;
			var dateValue = document.getElementsByClassName(renderCalendar["date"]["datelisturl"]);
			for(i = 0; i < dateValue.length; i++) {
				dateValue[i].addEventListener("click", function() {
					for(j = 0; j < dateValue.length; j++) {
						if(dateValue[j].classList.contains("selected-date")) {
							dateValue[j].classList.remove("selected-date");
							dateValue[j].classList.add("unselected-date");
						}
					}
					this.classList.remove("unselected-date");
					this.classList.add("selected-date");
				});
			}
		}
	},
	"ok-btn" : {
		"actionurl" : "null",
		"action" : function() {
			var elem = null, date = null, month = null, year = null;
			if(document.querySelector("#"+renderCalendar["date"]["actionurl"]+" .selected-date") !== null) {
				elem = document.querySelector("#"+renderCalendar["date"]["actionurl"]+" .selected-date");
				date = elem.getAttribute("data-target");
			}
			if(document.getElementById(renderCalendar["month_year"]["monthurl"]) !== null) {
				elem = document.getElementById(renderCalendar["month_year"]["monthurl"]);
				month = elem.getAttribute("data-target");
			}
			if(document.getElementById(renderCalendar["month_year"]["yearurl"]) !== null) {
				elem = document.getElementById(renderCalendar["month_year"]["yearurl"]);
				year = elem.getAttribute("data-target");
			}
			
			if(date !== null && month !== null && year !== null) {
				if(document.getElementById(renderBookings["check-in"]["calendar"]["actionurl"]+"-container").style.display === "block") {
					renderBookings["check-in"]["calendar"]["hide"]();
					renderBookings["check-in"]["value"] = new Date(year, month-1, date);
					elem = document.getElementById(renderBookings["check-in"]["actionurl"]);
					elem.value = renderBookings["check-in"]["value"].toDateString();
					if(renderBookings["check-out"]["value"] !== null && renderBookings["check-in"]["value"] > renderBookings["check-out"]["value"]) {
						renderBookings["check-out"]["value"] = "null";
						elem = document.getElementById(renderBookings["check-out"]["actionurl"]);
						elem.value = "";
					}
				}
				if(document.getElementById(renderBookings["check-out"]["calendar"]["actionurl"]+"-container").style.display === "block") {
					renderBookings["check-out"]["calendar"]["hide"]();
					renderBookings["check-out"]["value"] = new Date(year, month-1, date);
					elem = document.getElementById(renderBookings["check-out"]["actionurl"]);
					elem.value = renderBookings["check-out"]["value"].toDateString();
				}
			} else {
				alert("Please select a date");
			}
		}
	}
}

window.addEventListener("load", setActive);

function setActive() {
	var elem = document.getElementById("bookings-nav");
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
	var btn = null;
	if(document.getElementById(renderBookings["check-in"]["calendar"]["actionurl"]+"-container") !== null) {
		renderCalendar["seturl"](renderBookings["check-in"]["calendar"]["actionurl"]+"-container", "booking-check-in-month_year-container", "booking-check-in-month-value", "booking-check-in-year-value", "booking-check-in-prev", "booking-check-in-next", "booking-check-in-date-container", "booking-check-in-date-value", "booking-check-in-ok-btn");
		renderCalendar["load"]();
	}
	if(document.getElementById(renderCalendar["month_year"]["actionurl"]) !== null) {
		renderCalendar["month_year"]["load"]();
	}
	if(document.getElementById(renderCalendar["date"]["actionurl"]) !== null) {
		renderCalendar["date"]["load"]();
	}
	if(document.getElementById(renderCalendar["month_year"]["prev"]["actionurl"]) !== null) {
		btn = document.getElementById(renderCalendar["month_year"]["prev"]["actionurl"]);
		btn.addEventListener("click", function() {
			renderCalendar["seturl"](renderBookings["check-in"]["calendar"]["actionurl"]+"-container", "booking-check-in-month_year-container", "booking-check-in-month-value", "booking-check-in-year-value", "booking-check-in-prev", "booking-check-in-next", "booking-check-in-date-container", "booking-check-in-date-value", "booking-check-in-ok-btn");
			renderCalendar["month_year"]["prev"]["action"]();
		});
	}
	if(document.getElementById(renderCalendar["month_year"]["next"]["actionurl"]) !== null) {
		btn = document.getElementById(renderCalendar["month_year"]["next"]["actionurl"]);
		btn.addEventListener("click", function() {
			renderCalendar["seturl"](renderBookings["check-in"]["calendar"]["actionurl"]+"-container", "booking-check-in-month_year-container", "booking-check-in-month-value", "booking-check-in-year-value", "booking-check-in-prev", "booking-check-in-next", "booking-check-in-date-container", "booking-check-in-date-value", "booking-check-in-ok-btn");
			renderCalendar["month_year"]["next"]["action"]();
		});
	}
	
	if(document.getElementById(renderBookings["check-in"]["calendar"]["actionurl"]) !== null) {
		btn = document.getElementById(renderBookings["check-in"]["calendar"]["actionurl"]);
		btn.addEventListener("click", function() {
			renderCalendar["seturl"](renderBookings["check-in"]["calendar"]["actionurl"]+"-container", "booking-check-in-month_year-container", "booking-check-in-month-value", "booking-check-in-year-value", "booking-check-in-prev", "booking-check-in-next", "booking-check-in-date-container", "booking-check-in-date-value", "booking-check-in-ok-btn");
			renderBookings["check-in"]["calendar"]["action"]();
		});
	}
	
	if(document.getElementById(renderCalendar["ok-btn"]["actionurl"]) !== null) {
		btn = document.getElementById(renderCalendar["ok-btn"]["actionurl"]);
		btn.addEventListener("click", function() {
			renderCalendar["seturl"](renderBookings["check-in"]["calendar"]["actionurl"]+"-container", "booking-check-in-month_year-container", "booking-check-in-month-value", "booking-check-in-year-value", "booking-check-in-prev", "booking-check-in-next", "booking-check-in-date-container", "booking-check-in-date-value", "booking-check-in-ok-btn");
			renderCalendar["ok-btn"]["action"]();
		});
	}
	
	if(document.getElementById(renderBookings["check-out"]["calendar"]["actionurl"]+"-container") !== null) {
		renderCalendar["seturl"](renderBookings["check-out"]["calendar"]["actionurl"]+"-container", "booking-check-out-month_year-container", "booking-check-out-month-value", "booking-check-out-year-value", "booking-check-out-prev", "booking-check-out-next", "booking-check-out-date-container", "booking-check-out-date-value", "booking-check-out-ok-btn");
		renderCalendar["load"]();
	}
	if(document.getElementById(renderCalendar["month_year"]["actionurl"]) !== null) {
		renderCalendar["month_year"]["load"]();
	}
	if(document.getElementById(renderCalendar["date"]["actionurl"]) !== null) {
		renderCalendar["date"]["load"]();
	}
	if(document.getElementById(renderCalendar["month_year"]["prev"]["actionurl"]) !== null) {
		btn = document.getElementById(renderCalendar["month_year"]["prev"]["actionurl"]);
		btn.addEventListener("click", function() {
			renderCalendar["seturl"](renderBookings["check-out"]["calendar"]["actionurl"]+"-container", "booking-check-out-month_year-container", "booking-check-out-month-value", "booking-check-out-year-value", "booking-check-out-prev", "booking-check-out-next", "booking-check-out-date-container", "booking-check-out-date-value", "booking-check-out-ok-btn");
			renderCalendar["month_year"]["prev"]["action"]();
		});
	}
	if(document.getElementById(renderCalendar["month_year"]["next"]["actionurl"]) !== null) {
		btn = document.getElementById(renderCalendar["month_year"]["next"]["actionurl"]);
		btn.addEventListener("click", function() {
			renderCalendar["seturl"](renderBookings["check-out"]["calendar"]["actionurl"]+"-container", "booking-check-out-month_year-container", "booking-check-out-month-value", "booking-check-out-year-value", "booking-check-out-prev", "booking-check-out-next", "booking-check-out-date-container", "booking-check-out-date-value", "booking-check-out-ok-btn");
			renderCalendar["month_year"]["next"]["action"]();
		});
	}
	
	if(document.getElementById(renderBookings["check-out"]["calendar"]["actionurl"]) !== null) {
		btn = document.getElementById(renderBookings["check-out"]["calendar"]["actionurl"]);
		btn.addEventListener("click", function(){
			var errMsg = document.getElementById("error-message");
			var form = document.getElementById("form-container");
			if(renderBookings["check-in"]["value"] == "null") {
				errMsg.innerHTML = "Please select check in date";
				form.style.height = "430px";
				errMsg.style.display = "inline-block";
			} else if(renderBookings["check-in"]["value"] != "null" && renderBookings["check-out"]["value"] == "null") {
				renderCalendar["seturl"](renderBookings["check-out"]["calendar"]["actionurl"]+"-container", "booking-check-out-month_year-container", "booking-check-out-month-value", "booking-check-out-year-value", "booking-check-out-prev", "booking-check-out-next", "booking-check-out-date-container", "booking-check-out-date-value", "booking-check-out-ok-btn");
				renderCalendar["month_year"]["load"](renderBookings["check-in"]["value"]);
				renderCalendar["date"]["load"](renderBookings["check-in"]["value"], renderBookings["check-in"]["value"]);
				errMsg.style.display = "none";
				form.style.height = "410px";
				renderBookings["check-out"]["calendar"]["action"]();
			} else {
				errMsg.style.display = "none";
				form.style.height = "410px";
				renderCalendar["seturl"](renderBookings["check-out"]["calendar"]["actionurl"]+"-container", "booking-check-out-month_year-container", "booking-check-out-month-value", "booking-check-out-year-value", "booking-check-out-prev", "booking-check-out-next", "booking-check-out-date-container", "booking-check-out-date-value", "booking-check-out-ok-btn");
				renderBookings["check-out"]["calendar"]["action"]();
			}
		});
	}
	
	if(document.getElementById(renderCalendar["ok-btn"]["actionurl"]) !== null) {
		btn = document.getElementById(renderCalendar["ok-btn"]["actionurl"]);
		btn.addEventListener("click", function() {
			renderCalendar["seturl"](renderBookings["check-out"]["calendar"]["actionurl"]+"-container", "booking-check-out-month_year-container", "booking-check-out-month-value", "booking-check-out-year-value", "booking-check-out-prev", "booking-check-out-next", "booking-check-out-date-container", "booking-check-out-date-value", "booking-check-out-ok-btn");
			renderCalendar["ok-btn"]["action"]();
		});
	}
	
	if(document.getElementById(renderBookings["floor-no"]["actionurl"]) !== null) {
		AJAXRequest("GetFloorNo", renderBookings["floor-no"]["load"]);
		btn = document.getElementById(renderBookings["floor-no"]["actionurl"]);
		btn.addEventListener("change", renderBookings["floor-no"]["change"]);
	}
	
	if(document.getElementById(renderBookings["room-type"]["actionurl"]) !== null) {
		AJAXRequest("GetRoomType", renderBookings["room-type"]["load"]);
		btn = document.getElementById(renderBookings["room-type"]["actionurl"]);
		btn.addEventListener("change", renderBookings["room-type"]["change"]);
	}
	
}

