/**
 * 
 */

var Weekly = {};
var fortNightly = {};
var monthly = {};

var renderActions = {
	"renewal-date" : {
		
	},
	"entry-remainder" : {
		"weekly" : {
			"load" : function(datas) {
				var i, j;
				var elem = document.getElementById("remainder-weekly");
				var HTMLContent = "<div class = \"sub-heading\">Weekly-Journals</div>";
				HTMLContent += "<table>";
					HTMLContent += "<tr><th>Sl.No</th><th>Publisher Name</th><th>Periodical Name</th><th>Periodical Type</th><th>Periodicity</th><th>Date</th><th>Entry</th></tr>";
					for(i = 0, j = 1; i < datas.length; i++) {
						if(datas[i].periodicalType == "Journal") {
							HTMLContent += "<tr><td>"+j+"</td><td>"+datas[i].publisherName+"</td><td>"+datas[i].periodicalName+"</td><td>"+datas[i].periodicalType+"</td><td>"+datas[i].periodicity+"</td><td>"+datas[i].entryDate+"</td><td><input type = \"submit\" value = \"Entry\" class = \"entry-btn\"></td></tr>";
							j++;
						}
					}
				HTMLContent += "</table>";
				if(j == 1) {
					HTMLContent += "<div class = \"message\">No remainders</div>";
				}
				HTMLContent += "<div class = \"sub-heading\">Weekly-Magazines</div>";
				HTMLContent += "<table>";
					HTMLContent += "<tr><th>Sl.No</th><th>Publisher Name</th><th>Periodical Name</th><th>Periodical Type</th><th>Periodicity</th><th>Date</th><th>Entry</th></tr>";
					for(i = 0, j = 1; i < datas.length; i++) {
						if(datas[i].periodicalType == "Magazine") {
							HTMLContent += "<tr><td>"+j+"</td><td>"+datas[i].publisherName+"</td><td>"+datas[i].periodicalName+"</td><td>"+datas[i].periodicalType+"</td><td>"+datas[i].periodicity+"</td><td>"+datas[i].entryDate+"</td><td><input type = \"submit\" value = \"Entry\" class = \"entry-btn\"></td></tr>";
							j++;
						}
					}
				HTMLContent += "</table>";
				if(j == 1) {
					HTMLContent += "<div class = \"message\">No remainders</div>";
				}
				var elem = document.getElementById("remainder-weekly");
				elem.innerHTML = HTMLContent;
			}
		}
	}
}

window.addEventListener("load", setActive);

function setActive() {
	var active = document.getElementById("home-btn");
	active.setAttribute("class", "active");
	loadUsers();
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
	}
}

function loadUsers() {
	if(document.getElementById("renewal-dates-remainder") !== null) {
		AJAXRequest("GetRenewalDateDetails", showRenewalDates);
	}
	if(document.getElementById("register-entry-remainder") !== null) {
		AJAXRequest("GetEntryRemainderMonthly", showEntryRemainderMonthly);
		AJAXRequest("GetEntryRemainderWeekly", renderActions["entry-remainder"]["weekly"]["load"]);
	}
}

function showEntryRemainderMonthly(datas) {
	var i, j;
	var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var HTMLContent = "<div class = \"sub-heading\">Monthly-Journals</div>";
	HTMLContent += "<table>";
		HTMLContent += "<tr><th>Sl.No</th><th>Publisher Name</th><th>Periodical Name</th><th>Periodical Type</th><th>Periodicity</th><th>Date</th><th>Entry</th></tr>";
		for(i = 0, j = 1; i < datas.length; i++) {
			if(datas[i].periodicalType == "Journal") {
				HTMLContent += "<tr><td>"+j+"</td><td>"+datas[i].publisherName+"</td><td>"+datas[i].periodicalName+"</td><td>"+datas[i].periodicalType+"</td><td>"+datas[i].periodicity+"</td><td>"+months[datas[i].month-1]+" "+datas[i].year+"</td><td><input type = \"submit\" value = \"Entry\" class = \"entry-btn\"></td></tr>";
				j++;
			}
		}
	HTMLContent += "</table>";
	if(j == 1) {
		HTMLContent += "<div class = \"message\">No remainders</div>";
	}
	HTMLContent += "<div class = \"sub-heading\">Monthly-Magazines</div>";
	HTMLContent += "<table>";
		HTMLContent += "<tr><th>Sl.No</th><th>Publisher Name</th><th>Periodical Name</th><th>Periodical Type</th><th>Periodicity</th><th>Date</th><th>Entry</th></tr>";
		for(i = 0, j = 1; i < datas.length; i++) {
			if(datas[i].periodicalType == "Magazine") {
				HTMLContent += "<tr><td>"+j+"</td><td>"+datas[i].publisherName+"</td><td>"+datas[i].periodicalName+"</td><td>"+datas[i].periodicalType+"</td><td>"+datas[i].periodicity+"</td><td>"+months[datas[i].month-1]+" "+datas[i].year+"</td><td><input type = \"submit\" value = \"Entry\" class = \"entry-btn\"></td></tr>";
				j++;
			}
		}
	HTMLContent += "</table>";
	if(j == 1) {
		HTMLContent += "<div class = \"message\">No remainders</div>";
	}
	var elem = document.getElementById("remainder-monthly");
	elem.innerHTML = HTMLContent;
}

function showRenewalDates(datas) {
	var HTMLContent = "<div id = \"journal-renewal-date-remainder\">";
	HTMLContent += "<div class = \"sub-heading\">Journals</div>";
	HTMLContent += "<table>";
		HTMLContent += "<tr><th>Sl.No</th><th>Publisher Name</th><th>Periodical Name</th><th>Periodical Type</th><th>Periodicity</th><th>Renewal Date</th><th>Renewal</th></tr>";
		for(var i = 0, j = 1; i < datas.length; i++) {
			if(datas[i].periodicalType == "Journal") {
				HTMLContent += "<tr><td>"+j+"</td><td>"+datas[i].publisherName+"</td><td>"+datas[i].periodicalName+"</td><td>"+datas[i].periodicalType+"</td><td>"+datas[i].periodicity+"</td><td>"+datas[i].periodTo+"</td><td><input type = \"submit\" value = \"Renewal\" class = \"renewal-btn\"></td></tr>";
				j++;
			}
		}
	HTMLContent += "</table>" ;
	if(j == 1) {
		HTMLContent += "<div class = \"message\">No remainders</div>";
	}
	HTMLContent += "</div>";
	HTMLContent += "<div id = \"magazine-renewal-date-remainder\">";
	HTMLContent += "<div class = \"sub-heading\">Magazines</div>";
	HTMLContent += "<table>";
		HTMLContent += "<tr><th>Sl.No</th><th>Publisher Name</th><th>Periodical Name</th><th>Periodical Type</th><th>Periodicity</th><th>Renewal Date</th><th>Renewal</th></tr>";
		for(var i = 0, j = 1; i < datas.length; i++) {
			if(datas[i].periodicalType == "Magazine") {
				HTMLContent += "<tr><td>"+j+"</td><td>"+datas[i].publisherName+"</td><td>"+datas[i].periodicalName+"</td><td>"+datas[i].periodicalType+"</td><td>"+datas[i].periodicity+"</td><td>"+datas[i].periodTo+"</td><td><input type = \"submit\" value = \"Renewal\" class = \"renewal-btn\"></td></tr>";
				j++;
			}
		}
	HTMLContent += "</table>" ;
	if(j == 1) {
		HTMLContent += "<div class = \"message\">No remainders</div>";
	}
	HTMLContent += "</div>";
	var elem = document.getElementById("renewal-dates-remainder-content-holder");
	elem.innerHTML = HTMLContent;
}


