/**
 * 
 */

var periodicalNames = {};
var publisherNames = {};
var ID;

var renderHTML = {
	"register-entry" : {
		"periodical-type" : {
			"change" : function() {
				var periodicalType = document.getElementById("register-entry-periodical-type").value;
				AJAXRequest("GetPeriodicalNames", setPeriodicalNames, "periodicalType="+encodeURIComponent(periodicalType));
			}
		},
		"periodical-name" : {
			"keydown" : function() {
				var periodicalName = document.getElementById("register-entry-periodical-name").value;
				var suggestionBox = document.getElementById("register-entry-periodical-name-suggestion");
				var suggestionList;
				for(var i = 0 ; i < periodicalNames.length; i++) {
					if(periodicalName.indexOf(periodicalNames[i])) {
						suggestionList += "<option>"+periodicalNames[i]+"</option>";
					}
				}
				suggestionBox.innerHTML = suggestionList;
			},
			"change" : function() {
				var periodicalType = document.getElementById("register-entry-periodical-type").value;
				var periodicalName = document.getElementById("register-entry-periodical-name").value;
				AJAXRequest("GetPublisherNames", setPublisherNames, "periodicalType="+encodeURIComponent(periodicalType)+"&periodicalName="+encodeURIComponent(periodicalName));
			}
		},
		"publisher-name" : {
			"keydown" : function() {
				var publisherName = document.getElementById("register-entry-publisher-name").value;
				var suggestionBox = document.getElementById("register-entry-publisher-name-suggestion");
				var suggestionList;
				for(var i = 0; i < publisherNames.length; i++) {
					if(publisherName.indexOf(publisherNames[i])) {
						suggestionList += "<option>"+publisherNames[i]+"</option>";
					}
				}
				suggestionBox.innerHTML = suggestionList;
			}
		},
		"actionurl" : "register-entry",
		"action" : function() {
			var periodicalType = document.getElementById("register-entry-periodical-type").value, periodicalType_flag = 1;
			var periodicalName = document.getElementById("register-entry-periodical-name").value, periodicalName_flag = 1;
			var publisherName = document.getElementById("register-entry-publisher-name").value, publisherName_flag = 1;
			var errMsg = document.getElementById("error-message");
			
			if(periodicalType == "Select") {
				periodicalType_flag = 0;
				errMsg.innerHTML = "Please select a Periodical Type";
			} else if(periodicalName.length == 0) {
				periodicalName_flag = 0;
				errMsg.innerHTML = "Please enter a Periodical Name";
			} else if(publisherName.length == 0) {
				publisherName_flag = 0;
				errMsg.innerHTML = "Please enter a Title";
			}
			errMsg.style.display = "block";
			
			if(periodicalType_flag == 1 && periodicalName_flag == 1 && publisherName_flag == 1) {
				errMsg.style.display = "none";
				AJAXRequest("GetId", setId, "periodicalType="+encodeURIComponent(periodicalType)+"&periodicalName="+encodeURIComponent(periodicalName)+"&publisherName="+encodeURIComponent(publisherName));
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
	var elem = document.getElementById("register-entry-btn");
	elem.setAttribute("class", "active");
	loadUsers();
}

function loadUsers() {
	var elem = document.getElementById(renderHTML["register-entry"]["actionurl"]+"-periodical-type");
	elem.addEventListener("change", renderHTML["register-entry"]["periodical-type"]["change"]);
	
	
	elem = document.getElementById(renderHTML["register-entry"]["actionurl"]+"-periodical-name");
	elem.addEventListener("keydown", renderHTML["register-entry"]["periodical-name"]["keydown"]);
	elem.addEventListener("change", renderHTML["register-entry"]["periodical-name"]["change"]);
	
	elem = document.getElementById(renderHTML["register-entry"]["actionurl"]+"-publisher-name");
	elem.addEventListener("keydown", renderHTML["register-entry"]["publisher-name"]["keydown"]); 
	elem.addEventListener("change", renderHTML["register-entry"]["publisher-name"]["change"]);
	
	var show = document.getElementById(renderHTML["register-entry"]["actionurl"]+"-show");
	show.addEventListener("click", renderHTML["register-entry"]["action"]);
}

function setPeriodicalNames(datas) {
	periodicalNames = datas;
}

function setPublisherNames(datas) {
	publisherNames = datas;
}

function setId(data) {
	if(data == 0) {
		var errMsg = document.getElementById("error-message");
		errMsg.innerHTML = "No record";
		errMsg.style.display = "block";
	} else {
		ID = data;
		AJAXRequest("GetRegisterEntryDetails", showRegisterEntryDetails, "id="+encodeURIComponent(ID));
	}
}

function showRegisterEntryDetails(datas) {
	if(datas.code == 0) {
		if(document.getElementById("error-message-2") !== null)
			diplayErrMsg2(datas);
	} else {
		var elem = document.getElementById("entry-details-holder");
		var content = "<table>";
		content += "<tr><th>Sl.No</th><th>VOL No.</th><th>ISSUE No.</th><th>PUBLICATION DATE</th><th>DATE OF RECEIPT IN THE LIBRARY</th></tr>";
		var i, j;
		for(i = 0, j = 1; i < datas.length; i++, j++) {
			content += "<tr><td>"+j+"</td><td>"+datas[i].volumeNo+"</td><td>"+datas[i].issueNo+"</td><td>"+datas[i].publicationDate+"</td><td>"+datas[i].dateOfReceipt+"</td></tr>";
		}
		content += "<tr id = \"add-row\"></tr>";
		content += "</table>";
		elem.innerHTML = content;
		elem = document.getElementById("entry-details-holder-add");
		var addBtn = "<input type = \"submit\" id = \"entry-details-add\" value = \"Add Entry+\" class = \"add-btn\">";
		addBtn += "<input type = \"submit\" id = \"entry-details-addentry\" value = \"Register Entry+\" class = \"add-btn\">";
		addBtn += "<div id = \"error-message-2\"></div>";
		elem.innerHTML = addBtn;
		elem = document.getElementById("entry-details-addentry");
		elem.style.display = "none";
		content = null;
		var entryBtn = document.getElementById("entry-details-add");
		entryBtn.addEventListener("click", function() {
			entryBtn.style.display = "none";
			content = "<td>"+j+"</td>" +
					"<td><input type = \"text\" id = \"entry-details-add-volno\" placeholder = \"Vol No.\"></td>" +
					"<td><input type = \"text\" id = \"entry-details-add-issueno\" placeholder = \"Issue No.\"></td>" +
					"<td><input type = \"text\" id = \"entry-details-add-publicationdate\" placeholder = \"Publication Date\" class = \"row-input\"></td>" +
					"<td><input type = \"text\" id = \"entry-details-add-dateofreceipt\" placeholder = \"DD-MM-YYYY\" class = \"row-input\"></td>";
			elem = document.getElementById("add-row");
			elem.innerHTML = content;
			elem = document.getElementById("entry-details-addentry");
			elem.style.display = "inline-block";
			elem.addEventListener("click", addEntry);
		});
	}	
}


function addEntry() {
	var volumeNo = document.getElementById("entry-details-add-volno").value, volumeNo_flag = 1;
	var issueNo = document.getElementById("entry-details-add-issueno").value, issueNo_flag = 1;
	var publicationDate = document.getElementById("entry-details-add-publicationdate").value, publicationDate_flag = 1;
	var dateOfReceipt = document.getElementById("entry-details-add-dateofreceipt").value, dateOfReceipt_flag = 0, dateOfReceipt_regex = /^(([0-9]{2})-([0-9]{2})-[0-9]{4})$/;
	var errMsg = document.getElementById("error-message-2");
	
	if(dateOfReceipt.match(dateOfReceipt_regex)) {
		if(regexDate(dateOfReceipt)) {
			dateOfReceipt_flag = 1;
		} else {
			dateOfReceipt_flag = 0;
		}
	}	

	if(volumeNo.length == 0) {
		volumeNo_flag = 0;
		errMsg.innerHTML = "Please enter Volume No";
	} else if(issueNo.length == 0) {
		issueNo_flag = 0;
		errMsg.innerHTML = "Please enter Issue No";
	} else if(publicationDate.length == 0) {
		publicationDate_flag = 0;
		errMsg.innerHTML = "Please enter Publication date";
	} else if(dateOfReceipt_flag == 0) {
		if(dateOfReceipt.length == 0) {
			errMsg.innerHTML = "Please enter Date of Receipt";
		} else {
			errMsg.innerHTML = "Please enter a valid date in Date of Receipt";
		}
	}
	errMsg.style.display = "inline-block";
	
	if(volumeNo_flag == 1 && issueNo_flag == 1 && publicationDate_flag == 1 && dateOfReceipt_flag == 1) {
		errMsg.style.display = "none";
		AJAXRequest("SetRegisterEntryDetails", showRegisterEntryDetails, "id="+encodeURIComponent(ID)+"&volumeNo="+encodeURIComponent(volumeNo)+"&issueNo="+encodeURIComponent(issueNo)+"&publicationDate="+encodeURIComponent(publicationDate)+"&dateOfReceipt="+encodeURIComponent(dateOfReceipt));
	}
}

function diplayErrMsg2(datas) {
	var errMsg = document.getElementById("error-message-2");
	errMsg.innerHTML = datas.message;
	errMsg.style.display = "inline-block";
}

var regexDate = function(data) {
	var date = data.split('-');
	var day = date[0];
	var month = date[1];
	var year = date[2];
	var days;
	if(year <= 0) {
		return false;
	}
	if(month > 0 && month <= 12) {
		if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
			days = 31;
		} else if(month == 4 || month == 6 || month == 9 || month == 11) {
			days = 30;
		} else if(month == 2) {
			if(year % 4 == 0) {
				days = 29;
			} else {
				days = 28;
			}
		}
	} else {
		return false;
	}
	if(day > 0 && day <= days) {
		return true;
	} else {
		return false;
	}
}