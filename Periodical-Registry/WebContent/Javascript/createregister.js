/**
 * 
 */

var renderHTML = {
	"create-register" : {
		"actionurl" : "create-register",
		"action" : function() {
			var publisherName = document.getElementById("create-register-publisher-name").value, publisherName_flag = 1;
			var periodicalName = document.getElementById("create-register-periodical-name").value, periodicalName_flag = 1;
			var periodicalType = document.getElementById("create-register-periodical-type").value, periodicalType_flag = 1;
			var periodicity = document.getElementById("create-register-periodicity").value, periodicity_flag = 1;
			var periodFrom = document.getElementById("create-register-period-from").value, periodFrom_flag = 0, periodFrom_regex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
			var periodTo = document.getElementById("create-register-period-to").value, periodTo_flag = 0, periodTo_regex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
			var journalType = document.getElementById("create-register-journal-type").value, journalType_flag = 1;
			var department = document.getElementById("create-register-department").value, department_flag = 1;
			var publishersAddress = document.getElementById("create-register-publishers-address").value, publishersAddress_flag = 1;
			var supplyingAgentAddress = document.getElementById("create-register-supplying-agent-address").value, supplyingAgentAddress_flag = 1;
			var DDORChequeNumber = document.getElementById("create-register-ddorcheque-number").value, DDORChequeNumber_flag = 1;
			var DDORChequeAmount = document.getElementById("create-register-ddorcheque-amount").value, DDORChequeAmount_flag = 1, DDORChequeAmount_regex = /^\d+(?:[,]\d+)*(?:[.]\d+)*$/;
			var DDORChequeDate = document.getElementById("create-register-ddorcheque-date").value, DDORChequeDate_flag = 0, DDORChequeDate_regex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
			var placementNo = document.getElementById("create-register-placement-no").value, placementNo_flag = 1;
			var subscriptionNo = document.getElementById("create-register-subscription-no").value, subscriptionNo_flag = 1;
			var emailID = document.getElementById("create-register-email-id").value, emailID_flag = 1, emailID_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			var errMsg = document.getElementById("error-message");
			
			if(periodFrom.match(periodFrom_regex)) {
				if(regexDate(periodFrom)) {
					periodFrom_flag = 1;
				} else {
					periodFrom_flag = 0;
				}
			}
			if(periodTo.match(periodTo_regex)) {
				if(regexDate(periodTo)) {
					periodTo_flag = 1;
				} else {
					periodTo_flag = 0;
				}
			}
			if(DDORChequeDate.match(DDORChequeDate_regex)) {
				if(regexDate(DDORChequeDate)) {
					DDORChequeDate_flag = 1;
				} else {
					DDORChequeDate_flag = 0;
				}
			}
			
			if(publisherName.length == 0) {
				publisherName_flag = 0;
				errMsg.innerHTML = "Please enter a Title";
			} else if(periodicalName.length == 0) {
				periodicalName_flag = 0;
				errMsg.innerHTML = "Please enter a Periodical Name";
			} else if(periodicalType == "Select") {
				periodicalType_flag = 0;
				errMsg.innerHTML = "Please select a Periodical Type";
			} else if(periodicity == "Select") {
				periodicity_flag = 0;
				errMsg.innerHTML = "Please select a Periodicity";
			} else if(periodFrom_flag == 0) {
				if(periodFrom.length == 0) {
					errMsg.innerHTML = "Please enter a date in Period - From";
				} else {
					errMsg.innerHTML = "Please enter a valid date in Period - From";
				}
			} else if(periodTo_flag == 0) {
				if(periodTo.length == 0) {
					errMsg.innerHTML = "Please enter a date in Period - To";
				} else {
					errMsg.innerHTML = "Please enter a valid date in Period - To";
				}
			} else if(journalType == "Select") {
				journalType_flag = 0;
				errMsg.innerHTML = "Please select a Journal-Type";
			} else if(department == "Select") {
				department_flag = 0;
				errMsg.innerHTML = "Please select a department";
			} else if(publishersAddress.length == 0) {
				publishersAddress_flag = 0;
				errMsg.innerHTML = "Please enter a Publishers Address";
			} else if(supplyingAgentAddress.length == 0) {
				supplyingAgentAddress_flag = 0;
				errMsg.innerHTML = "Please enter a Supplying Agent Address";
			} else if(DDORChequeNumber.length == 0) {
				DDORChequeNumber_flag = 0;
				errMsg.innerHTML = "Please enter a DD/Cheque Number";
			} else if(!DDORChequeAmount.match(DDORChequeAmount_regex)) {
				DDORChequeAmount_flag = 0;
				if(DDORChequeAmount.length == 0) {
					errMsg.innerHTML = "Please enter a Amount in DD/Cheque";
				} else {
					errMsg.innerHTML = "Please enter a valid Amount in DD/Cheque";
				}
			} else if(DDORChequeDate_flag == 0) {
				if(DDORChequeDate.length == 0) {
					errMsg.innerHTML = "Please enter a date in DD/Cheque Date";
				} else {
					errMsg.innerHTML = "Please enter a valid date in DD/Cheque Date";
				}
			} else if(placementNo.length == 0) {
				placementNo_flag = 0;
				errMsg.innerHTML = "Please enter a Placement No";
			} else if(subscriptionNo.length == 0) {
				subscriptionNo_flag = 0;
				errMsg.innerHTML = "Please enter a Subscription No";
			} else if(!emailID.match(emailID_regex)) {
				emailID_flag = 0;
				if(emailID.length == 0) {
					errMsg.innerHTML = "Please enter an Email ID";
				} else {
					errMsg.innerHTML = "Please enter a valid Email Id";
				}
			}
			errMsg.style.display = "block";
			if(publisherName_flag == 1 && periodicalName_flag == 1 && periodicalType_flag == 1 && periodicity_flag == 1 && periodFrom_flag == 1 && periodTo_flag == 1 && journalType_flag == 1 && department_flag == 1 && publishersAddress_flag == 1 && DDORChequeNumber_flag == 1 && DDORChequeAmount_flag == 1 && DDORChequeDate_flag == 1 && placementNo_flag == 1 && subscriptionNo_flag == 1 && emailID_flag == 1) {
				errMsg.style.display = "none";
				AJAXRequest("CreateRegister", registerCreated, "publisherName="+encodeURIComponent(publisherName)+"&periodicalName="+encodeURIComponent(periodicalName)+"&periodicalType="+encodeURIComponent(periodicalType)+"&periodicity="+encodeURIComponent(periodicity)+"&periodFrom="+encodeURIComponent(periodFrom)+"&periodTo="+encodeURIComponent(periodTo)+"&journalType="+encodeURIComponent(journalType)+"&department="+encodeURIComponent(department)+"&publishersAddress="+encodeURIComponent(publishersAddress)+"&supplyingAgentAddress="+encodeURIComponent(supplyingAgentAddress)+"&DDORChequeNumber="+encodeURIComponent(DDORChequeNumber)+"&DDORChequeAmount="+encodeURIComponent(DDORChequeAmount)+"&DDORChequeDate="+encodeURIComponent(DDORChequeDate)+"&placementNo="+encodeURIComponent(placementNo)+"&subscriptionNo="+encodeURIComponent(subscriptionNo)+"&emailID="+encodeURIComponent(emailID));
			}
		}
	}
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
	var elem = document.getElementById("create-register-btn");
	elem.setAttribute("class", "active");
	loadUsers();
}

function loadUsers() {
	AJAXRequest("GetDepartments", updateDepartment);
	var sub = document.getElementById(renderHTML["create-register"]["actionurl"]+"-sub");
	sub.addEventListener("click", renderHTML["create-register"]["action"]);
}

function updateDepartment(datas) {
	var department = document.getElementsByClassName("department");
	var dropDownList = "<option>Select</option>";
	for (i = 0; i < datas.length; i++) {
		dropDownList += "<option>"+datas[i]+"</option>";
	}
	department[0].innerHTML = dropDownList;
}

function registerCreated(datas) {
	if(datas.code == 1) {
		alert(datas.message);
		window.location.href = "Register?option=Create-Register";
	} else {
		alert(datas.message);
	}
}