/**
 * 
 */

var periodicalNames = {};
var publisherNames = {};


var renderAction = {
	"byperiodicalname" : {
		"actionurl" : "byperiodicalname",
		"periodical-type" : {
			"change" : function() {
				var periodicalType = document.getElementById("byperiodicalname-periodical-type").value;
				AJAXRequest("GetPeriodicalNames", setPeriodicalNames, "periodicalType="+encodeURIComponent(periodicalType));
			}
		},
		"periodical-name" : {
			"keydown" : function() {
				var periodicalName = document.getElementById("byperiodicalname-periodical-name").value;
				var suggestionBox = document.getElementById("byperiodicalname-periodical-name-suggestion");
				var suggestionList;
				for(var i = 0; i < periodicalNames.length; i++) {
					suggestionList += "<option>"+periodicalNames[i]+"</option>";
				}
				suggestionBox.innerHTML = suggestionList;
			},
			"change" : function() {
				var periodicalType = document.getElementById("byperiodicalname-periodical-type").value;
				var periodicalName = document.getElementById("byperiodicalname-periodical-name").value;
				AJAXRequest("GetPublisherNames", setPublisherNames, "periodicalType="+encodeURIComponent(periodicalType)+"&periodicalName="+encodeURIComponent(periodicalName));
			}
		},
		"publisher-name" : {
			"keydown" : function() {
				var publisherName = document.getElementById("byperiodicalname-publisher-name").value;
				var suggestionBox = document.getElementById("byperiodicalname-publisher-name-suggestion");
				var suggestionList;
				for(var i = 0; i < publisherNames.length; i++) {
					if(publisherName.indexOf(publisherNames[i])) {
						suggestionList += "<option>"+publisherNames[i]+"</option>";
					}
				}
				suggestionBox.innerHTML = suggestionList;
			},
			"change" : function() {
				
				var periodicalType = document.getElementById("byperiodicalname-periodical-type").value, periodicalType_flag = 1;
				var periodicalName = document.getElementById("byperiodicalname-periodical-name").value, periodicalName_flag = 1;
				var publisherName = document.getElementById("byperiodicalname-publisher-name").value, publisherName_flag = 1;
				var errMsg = document.getElementById("error-message");
				
				if(periodicalType == "Select") {
					periodicalType_flag = 0;
					errMsg.innerHTML = "Please select a Periodical Type";
				} else if(periodicalName.length == 0) {
					periodicalName_flag = 0;
					errMsg.innerHTML = "Please enter a Periodical Name";
				} else if(publisherName.length == 0) {
					publisherName_flag = 0;
					errMsg.innerHTML = "Please enter a Periodical Name";
				}
				errMsg.style.display = "block";
				
				if(periodicalType_flag == 1 && periodicalName_flag == 1 && publisherName_flag == 1) {
					errMsg.style.display = "none";
					AJAXRequest("GetRenewalDateByPeriodicalName", showRenewalDateByPeriodicalName, "periodicalType="+encodeURIComponent(periodicalType)+"&periodicalName="+encodeURIComponent(periodicalName)+"&publisherName="+encodeURIComponent(publisherName));
				}
			}
		}
	}, 
	"bymonth" : {
		"actionurl" : "bymonth",
		"action" : function() {
			var month = document.getElementById("bymonth-month").value, month_flag = 1;
			var year = document.getElementById("bymonth-year").value, year_flag = 1;
			var errMsg = document.getElementById("error-message");
			
			if(month == "Select") {
				month_flag = 0;
				errMsg.innerHTML = "Please select month";
			} else if(year == "Select") {
				year_flag = 0;
				errMsg.innerHTML = "Please select year";
			}
			errMsg.style.display = "block";
			
			if(month_flag == 1 && year_flag == 1) {
				errMsg.style.display = "none";
				AJAXRequest("GetRenewalDateByMonth", showRenewalDateByMonth, "month="+encodeURIComponent(month)+"&year="+encodeURIComponent(year));
			}
		}
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

window.addEventListener("load", setActive);

function setActive() {
	var elem = document.getElementById("renewal-dates-btn");
	elem.setAttribute("class", "active");
	loadUsers();
}

function loadUsers() {
	var btn = document.getElementById("renewal-dates-byperiodicalname-btn");
	btn.addEventListener("click", searchByPeriodicalName);
	
	btn = document.getElementById("renewal-dates-bymonth-btn");
	btn.addEventListener("click", searchByMonth);
}

function searchByPeriodicalName() {
	var HTMLContent = "<table>";
	HTMLContent += "<tr>";
	HTMLContent += "<td><label>Periodical-Type</label></td>";
	HTMLContent += "<td><select id = \"byperiodicalname-periodical-type\">"
			+ "<option>Select</option>"
			+ "<option>Journal</option>"
			+ "<option>Magazine</option>"
			+ "<option>News Letter</option>"
			+ "</select></td>";
	HTMLContent += "</tr>";
	HTMLContent += "<tr>";
	HTMLContent += "<td><label>Periodical-Name</label></td>";
	HTMLContent += "<td><input type = \"text\" id = \"byperiodicalname-periodical-name\" list = \"byperiodicalname-periodical-name-suggestion\"><datalist id = \"byperiodicalname-periodical-name-suggestion\"></datalist></td>";
	HTMLContent += "</tr>";
	HTMLContent += "<tr>";
	HTMLContent += "<td><label>Publisher Name</label></td>";
	HTMLContent += "<td><input type = \"text\" id = \"byperiodicalname-publisher-name\" list = \"byperiodicalname-publisher-name-suggestion\"><datalist id = \"byperiodicalname-publisher-name-suggestion\"></datalist></td>";
	HTMLContent += "</tr>";
	HTMLContent += "<tr id = \"show-renewal-date\"></tr>";
	HTMLContent += "</table>";
	HTMLContent += "<div id = \"error-message\"></div>";
	
	var elem = document.getElementById("renewal-dates-bymonth");
	elem.style.display = "none";
	elem = document.getElementById("renewal-dates-byperiodicalname");
	elem.style.display = "block";
	elem.innerHTML = HTMLContent;

	elem = document.getElementById("byperiodicalname-periodical-type");
	elem.addEventListener("change", renderAction["byperiodicalname"]["periodical-type"]["change"]);
	
	elem = document.getElementById("byperiodicalname-periodical-name");
	elem.addEventListener("change", renderAction["byperiodicalname"]["periodical-name"]["change"]);
	elem.addEventListener("keydown", renderAction["byperiodicalname"]["periodical-name"]["keydown"]);
	
	elem = document.getElementById("byperiodicalname-publisher-name");
	elem.addEventListener("keydown", renderAction["byperiodicalname"]["publisher-name"]["keydown"]);
	elem.addEventListener("keyup", renderAction["byperiodicalname"]["publisher-name"]["change"]);
	
}


function setPeriodicalNames(datas) {
	periodicalNames = datas;
}

function setPublisherNames(datas) {
	publisherNames = datas;
}

function showRenewalDateByPeriodicalName(data) {
	if(data.code == "1") {
		var HTMLContent = "<td><label>Renewal Date</label></td>";
		HTMLContent += "<td><label>"+data.date+" (DD-MM-YYYY)</label></td>";
	} else {
		var HTMLContent = "<td><label>Renewal Date</label></td>";
		HTMLContent += "<td><label>"+data.date+"</label></td>";
	}
	
	var elem = document.getElementById("show-renewal-date");
	elem.innerHTML = HTMLContent;
	
}


function searchByMonth() {
	var HTMLContent = "<table>";
	HTMLContent += "<tr>";
	HTMLContent += "<td><label>Month</label></td>";
	HTMLContent += "<td><select id = \"bymonth-month\">";
	HTMLContent += "<option>Select</option>";
	for(i = 1; i <= 12; i++) {	
		HTMLContent += "<option>"+i+"</option>";
	}	
	HTMLContent += "</td>";
	HTMLContent += "</tr>";
	HTMLContent += "<tr>";
	HTMLContent += "<td><label>Year</label></td>";
	HTMLContent += "<td><select id = \"bymonth-year\">";
	HTMLContent += "<option>Select</option>";
	var year = new Date().getFullYear();
	for(i = year-1; i <= year+10; i++) {	
		HTMLContent += "<option>"+i+"</option>";
	}
	HTMLContent += "</td>";
	HTMLContent += "</tr>";
	HTMLContent += "</table>";
	HTMLContent += "<div id = \"error-message\"></div>";
	HTMLContent += "<input type = \"submit\" value = \"Renewal Date\" id = \"bymonth-show\" class = \"submit-btn\">";
	HTMLContent += "<div id = \"bymonth-result-holder\"></div>";
	var elem = document.getElementById("renewal-dates-byperiodicalname");
	elem.style.display = "none";
	elem = document.getElementById("renewal-dates-bymonth");
	elem.style.display = "block";
	elem.innerHTML = HTMLContent;
	
	elem = document.getElementById("bymonth-show");
	elem.addEventListener("click", renderAction["bymonth"]["action"]);
}


function showRenewalDateByMonth(datas) {
	
	var HTMLContent = "<table>";
	HTMLContent += "<tr>" +
			"<th>Sl.No</th><th>Publisher Name</th><th>Periodical Name</th><th>Periodical Type</th><th>Periodicity</th><th>Renewal Date</th>" +
			"</tr>";
	if(datas.length != 0) {
		for(var i = 0, j = 1; i < datas.length; i++, j++) {
			HTMLContent += "<tr>" +
						"<td>"+j+"</td><td>"+datas[i].publisherName+"</td><td>"+datas[i].periodicalName+"</td><td>"+datas[i].periodicalType+"</td><td>"+datas[i].periodicity+"</td><td>"+datas[i].periodTo+"</td>" +
						"</tr>";
		}
	} 
	HTMLContent += "</table>";
	if(datas.length == 0) {
		HTMLContent += "<div id = \"message\">No results</div>";
	}
	
	var elem = document.getElementById("bymonth-result-holder");
	elem.innerHTML = HTMLContent;
		
}
