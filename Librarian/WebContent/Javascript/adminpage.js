 /**
 * 
 */

var feedbacks = {};
var feedbackId;
var userName;
var BEDepartmentsList = {};
var MEDepartmentsList = {};



var renderHTML = {
	"collections" : {
		"actionurl" : "collections", 
		"newarrival" : {
			"actionurl" : "newarrival",
			"action" : function() {
				var errMsg = document.getElementById("error-message");
				var allowedFiles = [".pdf", " .PDF"];
				var fileName = document.getElementById("collections-newarrival-value").value, fileName_flag = 1, fileName_regex = new RegExp("([a-zA-Z0-9\s_\\.\-:()])+(" + allowedFiles.join('|') + ")$");
				if(!fileName.toLowerCase().match(fileName_regex)) {
					fileName_flag = 0;
					if(fileName.length == 0) {
						errMsg.innerHTML = "Please upload a pdf file";
					} else {
						errMsg.innerHTML = "Uploaded file is not a pdf";
					}
					errMsg.style.display = "block";
				}
				if(fileName_flag == 1) { 
					errMsg.style.display = "none";
					var formData = new FormData();
					formData.append("myFile", document.getElementById("collections-newarrival-value").files[0]);
					formData.append("path", "Collections");
					formData.append("filename", "NEW_ARRIVALS.pdf");
					formData.append("format", "pdf");
					filesAJAXRequest("CreateFile", fileUploaded, formData);
				}
			}
		},
		"image" : {
			"actionurl" : "image",
			"action" : function() {
				var fileName = document.getElementById("collections-image-value").value;
				var errMsg = document.getElementById("error-message");
				var allowedFiles = [".jpg", ".png", ".jpeg"," .jpg", " .png", " .jpeg"];
				var fileName = document.getElementById("collections-image-value").value, fileName_flag = 1, fileName_regex = new RegExp("([a-zA-Z0-9\s_\\.\-:()])+(" + allowedFiles.join('|') + ")$");
				if(!fileName.toLowerCase().match(fileName_regex)) {
					fileName_flag = 0;
					if(fileName.length == 0) {
						errMsg.innerHTML = "Please upload a image file";
					} else {
						errMsg.innerHTML = "Please upload a jpg or jpeg or png images";
					}
					errMsg.style.display = "block";
				}
				if(fileName_flag == 1) { 
					errMsg.style.display = "none";
					var formData = new FormData();
					formData.append("myFile", document.getElementById("collections-image-value").files[0]);
					formData.append("path", "");
					formData.append("filename", "Book and Nonbook mat.jpg");
					formData.append("format", "Images");
					filesAJAXRequest("CreateFile", fileUploaded, formData);
				}
			}			
		},
		"cdtable" : {
			"actionurl" : "cdtable",
			"action" : function() {
				var errMsg = document.getElementById("error-message");
				var allowedFiles = [".pdf", " .PDF"];
				var degree = document.getElementById("collections-cdtable-degree").value, degree_flag = 1;
				var department = document.getElementById("collections-cdtable-department").value;
				var fileName = document.getElementById("collections-cdtable-value").value, fileName_flag = 1, fileName_regex = new RegExp("([a-zA-Z0-9\s_\\.\-:()])+("+allowedFiles.join('|')+")$");
				var numOfCDs = document.getElementById("collections-cdtable-numofcds").value, numOfCDs_flag = 1, numOfCDs_regex = /^[0-9]{1,}$/;
				if(degree == "Degree") {
					degree_flag = 0;
					errMsg.innerHTML = "Please select degree";
					errMsg.style.display = "block";
				} else if(!fileName.toLowerCase().match(fileName_regex)) {
					fileName_flag = 0;
					if(fileName.length == 0) {
						errMsg.innerHTML = "Please upload pdf file";
					} else {
						errMsg.innerHTML = "Uploaded file is not pdf";
					}
					errMsg.style.display = "block";
				} else if(!numOfCDs.match(numOfCDs_regex)) {
					numOfCDs_flag = 0;
					if(numOfCDs.length == 0) {
						errMsg.innerHTML = "Please enter no. of CD's";
					} else {
						errMsg.innerHTML = "No of CD is Invalid";
					}
					errMsg.style.display = "block";
				}
				if(degree_flag == 1 && fileName_flag == 1 && numOfCDs_flag == 1) {
					errMsg.style.display = "none";
					AJAXRequest("UpdateCollectionsCDTable", updateFile, "degree="+encodeURIComponent(degree)+"&department="+encodeURIComponent(department)+"&filename="+encodeURIComponent(fileName)+"&numofcds="+encodeURIComponent(numOfCDs));
				}
			} 
		}
	},
	"journals" : {
		"actionurl" : "journals",
		"newarrival" : {
			"actionurl" : "newarrival",
			"action" : function() {
				var errMsg = document.getElementById("error-message");
				var allowedFiles = [".pdf", " .PDF"];
				var fileName = document.getElementById("journals-newarrival-value").value, fileName_flag = 1, fileName_regex = new RegExp("([a-zA-Z0-9\s_\\.\-:()])+("+allowedFiles.join('|')+")$");
				if(!fileName.toLowerCase().match(fileName_regex)) {
					fileName_flag = 0;
					if(fileName.length == 0) {
						errMsg.innerHTML = "Please upload pdf file";
					} else {
						errMsg.innerHTML = "Uploaded file is not pdf";
					}
					errMsg.style.display = "block";
				}
				if(fileName_flag == 1) {
					errMsg.style.display = "none";
					var formData = new FormData();
					formData.append("myFile", document.getElementById("journals-newarrival-value").files[0]);
					formData.append("path", "Journals");
					formData.append("format", "pdf");
					formData.append("filename", "JOURNAL NEW ARRIVALS.pdf");
					filesAJAXRequest("CreateFile", fileUploaded, formData);
				}
			}
		},
		"cdtable" : {
			"actionurl" : "cdtable",
			"action" : function() {
				var errMsg = document.getElementById("error-message");
				var allowedFiles = [".pdf", " .PDF"];
				var fileName = document.getElementById("journals-cdtable-value").value, fileName_flag = 1, fileName_regex = new RegExp("([a-zA-Z0-9\s_\\.\-:()])+("+allowedFiles.join('|')+")$");
				var region = document.getElementById("journals-cdtable-region").value, region_flag = 1;
				var degree = document.getElementById("journals-cdtable-degree").value, degree_flag = 1;
				var department = document.getElementById("journals-cdtable-department").value;
				var numOfCDs = document.getElementById("journals-cdtable-numofcds").value, numOfCDs_flag = 1, numOfCDs_regex = /^[0-9]{1,}$/;
				if(region == "Region") {
					region_flag = 0;
					errMsg.innerHTML = "Please select region";
					errMsg.style.display = "block";
				} else if(degree == "Degree") {
					degree_flag = 0;
					errMsg.innerHTML = "Please select degree";
					errMsg.style.display = "block";
				} else if(!fileName.toLowerCase().match(fileName_regex)) {
					fileName_flag = 0;
					if(fileName.length == 0) {
						errMsg.innerHTML = "Please upload pdf file";
					} else {
						errMsg.innerHTML = "Uploaded file is not pdf";
					}
					errMsg.style.display = "block";
				} else if(!numOfCDs.match(numOfCDs_regex)) {
					numOfCDs_flag = 0;
					if(numOfCDs.length == 0) {
						errMsg.innerHTML = "Please enter no. of Journals";
					} else {
						errMsg.innerHTML = "No of Journals is Invalid";
					}
					errMsg.style.display = "block";
				}
				if(region_flag == 1 && degree_flag == 1 && fileName_flag == 1 && numOfCDs_flag == 1) {
					errMsg.style.display = "none";
					AJAXRequest("UpdateCDTable", updateFile, "degree="+encodeURIComponent(degree)+"&department="+encodeURIComponent(department)+"&filename="+encodeURIComponent(fileName)+"&numofcds="+encodeURIComponent(numOfCDs)+"&region="+encodeURIComponent(region)+"&id=jou");
				}
			}
		}
	},
	"magazines" : {
		"actionurl" : "magazines",
		"newarrival" : {
			"actionurl" : "newarrival",
			"action" : function() {
				var errMsg = document.getElementById("error-message");
				var allowedFiles = [".pdf", " .PDF"];
				var fileName = document.getElementById("magazines-newarrival-value").value, fileName_flag = 1, fileName_regex = new RegExp("([a-zA-Z0-9\s_\\.\-:()])+("+allowedFiles.join('|')+")$");
				if(!fileName.toLowerCase().match(fileName_regex)) {
					fileName_flag = 0;
					if(fileName.length == 0) {
						errMsg.innerHTML = "Please upload pdf file";
					} else {
						errMsg.innerHTML = "Uploaded file is not pdf";
					}
					errMsg.style.display = "block";
				}
				if(fileName_flag == 1) {
					errMsg.style.display = "none";
					var formData = new FormData();
					formData.append("myFile", document.getElementById("magazines-newarrival-value").files[0]);
					formData.append("path", "Magazines");
					formData.append("format", "pdf");
					formData.append("filename", "MAGAZINE NEW ARRIVALS.pdf");
					filesAJAXRequest("CreateFile", fileUploaded, formData);
				}
			}
		},
		"cdtable" : {
			"actionurl" : "cdtable",
			"action" : function() {
				var errMsg = document.getElementById("error-message");	
				var allowedFiles = [".pdf", " .PDF"];
				var fileName = document.getElementById("magazines-cdtable-value").value, fileName_flag = 1, fileName_regex = new RegExp("([a-zA-Z0-9\s_\\.\-:()])+("+allowedFiles.join('|')+")$");
				var region = document.getElementById("magazines-cdtable-region").value, region_flag = 1;
				var degree = document.getElementById("magazines-cdtable-degree").value, degree_flag = 1;
				var department = document.getElementById("magazines-cdtable-department").value;
				var numOfCDs = document.getElementById("magazines-cdtable-numofcds").value, numOfCDs_flag = 1, numOfCDs_regex = /^[0-9]{1,}$/;
				if(region == "Region") {
					region_flag = 0;
					errMsg.innerHTML = "Please select region";
					errMsg.style.display = "block";
				} else if(degree == "Degree") {
					degree_flag = 0;
					errMsg.innerHTML = "Please select degree";
					errMsg.style.display = "block";
				} else if(!fileName.toLowerCase().match(fileName_regex)) {
					fileName_flag = 0;
					if(fileName.length == 0) {
						errMsg.innerHTML = "Please upload pdf file";
					} else {
						errMsg.innerHTML = "Uploaded file is not pdf";
					}
					errMsg.style.display = "block";
				} else if(!numOfCDs.match(numOfCDs_regex)) {
					numOfCDs_flag = 0;
					if(numOfCDs.length == 0) {
						errMsg.innerHTML = "Please enter no. of Magazines";
					} else {
						errMsg.innerHTML = "No of Magazines is Invalid";
					}
					errMsg.style.display = "block";
				}
				if(region_flag == 1 && degree_flag == 1 && fileName_flag == 1 && numOfCDs_flag == 1) {
					errMsg.style.display = "none";
					AJAXRequest("UpdateCDTable", updateFile, "degree="+encodeURIComponent(degree)+"&department="+encodeURIComponent(department)+"&filename="+encodeURIComponent(fileName)+"&numofcds="+encodeURIComponent(numOfCDs)+"&region="+encodeURIComponent(region)+"&id=mag");
				}
			}
		}
	},
	"e-journals" : {
		"actionurl" : "e-journals",
		"action" : function() {
			var department = document.getElementById("e-journals-department").value, department_flag = 1;
			var webAddress = document.getElementById("e-journals-webaddress").value, webAddress_flag = 1;
			var errMsg = document.getElementById("error-message");
			if(department.length == 0) {
				department_flag = 0;
				errMsg.innerHTML = "Please enter department";
				errMsg.style.display = "block";
			}
			else if(webAddress.length == 0) {
				webAddress_flag = 0;
				errMsg.innerHTML = "Please entecr web address";
				errMsg.style.display = "block";
			}
			if(department_flag == 1 && webAddress_flag == 1) {
				AJAXRequest("EJournals", booksUpdated, "department="+encodeURIComponent(department)+"&webaddress="+encodeURIComponent(webAddress));
			}
		}
	},
	"mbalibrary" : {
		"actionurl" : "mba-library",
		"newarrival" : {
			"actionurl" : "newarrival",
			"action" : function() {
				var errMsg = document.getElementById("error-message");
				var allowedFiles = [".pdf", " .PDF"];
				var fileName = document.getElementById("mba-library-newarrival-value").value, fileName_flag = 1, fileName_regex = new RegExp("([a-zA-Z0-9\s_\\.\-:()])+(" + allowedFiles.join('|') + ")$");
				if(!fileName.toLowerCase().match(fileName_regex)) {
					fileName_flag = 0;
					if(fileName.length == 0) {
						errMsg.innerHTML = "Please upload a pdf file";
					} else {
						errMsg.innerHTML = "Uploaded file is not a pdf";
					}
					errMsg.style.display = "block";
				}
				if(fileName_flag == 1) { 
					errMsg.style.display = "none";
					var formData = new FormData();
					formData.append("myFile", document.getElementById("mba-library-newarrival-value").files[0]);
					formData.append("path", "MBA-Library");
					formData.append("filename", "MBA NEW.pdf");
					formData.append("format", "pdf");
					filesAJAXRequest("CreateFile", fileUploaded, formData);
				}
			}
		},
		"books" : {
			"actionurl" : "books",
			"action" : function() {
				var bookName = document.getElementById("mba-library-bookname").value, bookName_flag = 1, bookName_regex = /^[A-Z&'/ ]{1,}$/;
				var volumes = document.getElementById("mba-library-volumes").value, volumes_flag = 1, volumes_regex = /^[0-9]{1,}$/;
				var titles = document.getElementById("mba-library-titles").value, titles_flag = 1, titles_regex = /^[0-9]{1,}$/;
				var errMsg = document.getElementById("error-message");
				if(!bookName.match(bookName_regex)) {
					bookName_flag = 0;
					if(bookName.length == 0) {
						errMsg.innerHTML = "Please enter the Book name";
					} else {
						errMsg.innerHTML = "Book name is invalid,use only capital letters";
					}
					errMsg.style.display = "block";
				} else if(!volumes.match(volumes_regex)) {
		 			volumes_flag = 0;
					if(volumes.length == 0) {
						errMsg.innerHTML = "Please enter no. of volumes";
					} else {
						errMsg.innerHTML = "Volume is Invalid";
					}
					errMsg.style.display = "block";
				} else if(!titles.match(titles_regex)) {
					titles_flag = 0;
					if(titles.length == 0) {
						errMsg.innerHTML = "Please enter no. of titles";
					} else {
						errMsg.innerHTML = "Titles is Invalid";
					}
					errMsg.style.display = "block";
				}
				if(bookName_flag == 1 && volumes_flag == 1 && titles_flag == 1) { 
					errMsg.style.display = "none";
					AJAXRequest("UpdateLibraryBooks", booksUpdated, "bookname="+encodeURIComponent(bookName)+"&volumes="+encodeURIComponent(volumes)+"&titles="+encodeURIComponent(titles)+"&id=mba");
				}
			}
		},
		"journalssubscribed" : {
			"actionurl" : "journalssubscribed",
			"action" : function() {
				var errMsg = document.getElementById("error-message");
				var allowedFiles = [".pdf", " .PDF"];
				var fileName = document.getElementById("mba-library-journalssubscribed-value").value, fileName_flag = 1, fileName_regex = new RegExp("([a-zA-Z0-9\s_\\.\-:()])+(" + allowedFiles.join('|') + ")$");
				if(!fileName.toLowerCase().match(fileName_regex)) {
					fileName_flag = 0;
					if(fileName.length == 0) {
						errMsg.innerHTML = "Please upload a pdf file";
					} else {
						errMsg.innerHTML = "Uploaded file is not a pdf";
					}
					errMsg.style.display = "block";
				}
				if(fileName_flag == 1) { 
					errMsg.style.display = "none";
					var formData = new FormData();
					formData.append("myFile", document.getElementById("mba-library-journalssubscribed-value").files[0]);
					formData.append("path", "MBA-Library");
					formData.append("filename", "MBA_JRLS-1.pdf");
					formData.append("format", "pdf");
					filesAJAXRequest("CreateFile", fileUploaded, formData);
				}
			}
		},
		"magazinessubscribed" : {
			"actionurl" : "magazinessubscribed",
			"action" : function() {
				var errMsg = document.getElementById("error-message");
				var allowedFiles = [".pdf", " .PDF"];
				var fileName = document.getElementById("mba-library-magazinessubscribed-value").value, fileName_flag = 1, fileName_regex = new RegExp("([a-zA-Z0-9\s_\\.\-:()])+(" + allowedFiles.join('|') + ")$");
				if(!fileName.toLowerCase().match(fileName_regex)) {
					fileName_flag = 0;
					if(fileName.length == 0) {
						errMsg.innerHTML = "Please upload a pdf file";
					} else {
						errMsg.innerHTML = "Uploaded file is not a pdf";
					}
					errMsg.style.display = "block";
				}
				if(fileName_flag == 1) { 
					errMsg.style.display = "none";
					var formData = new FormData();
					formData.append("myFile", document.getElementById("mba-library-magazinessubscribed-value").files[0]);
					formData.append("path", "MBA-Library");
					formData.append("filename", "mba-maga_list-1.pdf");
					formData.append("format", "pdf");
					filesAJAXRequest("CreateFile", fileUploaded, formData);
				}
			}
		}
	},
	"mcalibrary" : {
		"actionurl" : "mca-library",
		"newarrival" : {
			"actionurl" : "newarrival",
			"action" : function() {
				var errMsg = document.getElementById("error-message");
				var allowedFiles = [".pdf", " .PDF"];
				var fileName = document.getElementById("mca-library-newarrival-value").value, fileName_flag = 1, fileName_regex = new RegExp("([a-zA-Z0-9\s_\\.\-:()])+(" + allowedFiles.join('|') + ")$");
				if(!fileName.toLowerCase().match(fileName_regex)) {
					fileName_flag = 0;
					if(fileName.length == 0) {
						errMsg.innerHTML = "Please upload a pdf file";
					} else {
						errMsg.innerHTML = "Uploaded file is not a pdf";
					}
					errMsg.style.display = "block";
				}
				if(fileName_flag == 1) { 
					errMsg.style.display = "none";
					var formData = new FormData();
					formData.append("myFile", document.getElementById("mca-library-newarrival-value").files[0]);
					formData.append("path", "MCA-Library");
					formData.append("filename", "MCA NEW.pdf");
					formData.append("format", "pdf");
					filesAJAXRequest("CreateFile", fileUploaded, formData);
				}
			}
		},
		"books" : {
			"actionurl" : "books",
			"action" : function() {
				var bookName = document.getElementById("mca-library-bookname").value, bookName_flag = 1, bookName_regex = /^[A-Z&"'/ ]{1,}$/;
				var volumes = document.getElementById("mca-library-volumes").value, volumes_flag = 1, volumes_regex = /^[0-9]{1,}$/;
				var titles = document.getElementById("mca-library-titles").value, titles_flag = 1, titles_regex = /^[0-9]{1,}$/;
				var errMsg = document.getElementById("error-message");
				if(!bookName.match(bookName_regex)) {
					bookName_flag = 0;
					if(bookName.length == 0) {
						errMsg.innerHTML = "Please enter the Book name";
					} else {
						errMsg.innerHTML = "Book name is invalid,use only capital letters";
					}
					errMsg.style.display = "block";
				} else if(!volumes.match(volumes_regex)) {
		 			volumes_flag = 0;
					if(volumes.length == 0) {
						errMsg.innerHTML = "Please enter no. of volumes";
					} else {
						errMsg.innerHTML = "Volume is Invalid";
					}
					errMsg.style.display = "block";
				} else if(!titles.match(titles_regex)) {
					titles_flag = 0;
					if(titles.length == 0) {
						errMsg.innerHTML = "Please enter no. of titles";
					} else {
						errMsg.innerHTML = "Titles is Invalid";
					}
					errMsg.style.display = "block";
				}
				if(bookName_flag == 1 && volumes_flag == 1 && titles_flag == 1) { 
					errMsg.style.display = "none";
					AJAXRequest("UpdateLibraryBooks", booksUpdated, "bookname="+encodeURIComponent(bookName)+"&volumes="+encodeURIComponent(volumes)+"&titles="+encodeURIComponent(titles)+"&id=mca");
				}
			}
		},
		"journalssubscribed" : {
			"actionurl" : "journalssubscribed",
			"action" : function() {
				var errMsg = document.getElementById("error-message");
				var allowedFiles = [".pdf", " .PDF"];
				var fileName = document.getElementById("mca-library-journalssubscribed-value").value, fileName_flag = 1, fileName_regex = new RegExp("([a-zA-Z0-9\s_\\.\-:()])+(" + allowedFiles.join('|') + ")$");
				if(!fileName.toLowerCase().match(fileName_regex)) {
					fileName_flag = 0;
					if(fileName.length == 0) {
						errMsg.innerHTML = "Please upload a pdf file";
					} else {
						errMsg.innerHTML = "Uploaded file is not a pdf";
					}
					errMsg.style.display = "block";
				}
				if(fileName_flag == 1) { 
					errMsg.style.display = "none";
					var formData = new FormData();
					formData.append("myFile", document.getElementById("mca-library-journalssubscribed-value").files[0]);
					formData.append("path", "MCA-Library");
					formData.append("filename", "MCA_JRLS (2).pdf");
					formData.append("format", "pdf");
					filesAJAXRequest("CreateFile", fileUploaded, formData);
				}
			}
		},
		"magazinessubscribed" : {
			"actionurl" : "magazinessubscribed",
			"action" : function() {
				var errMsg = document.getElementById("error-message");
				var allowedFiles = [".pdf", " .PDF"];
				var fileName = document.getElementById("mca-library-magazinessubscribed-value").value, fileName_flag = 1, fileName_regex = new RegExp("([a-zA-Z0-9\s_\\.\-:()])+(" + allowedFiles.join('|') + ")$");
				if(!fileName.toLowerCase().match(fileName_regex)) {
					fileName_flag = 0;
					if(fileName.length == 0) {
						errMsg.innerHTML = "Please upload a pdf file";
					} else {
						errMsg.innerHTML = "Uploaded file is not a pdf";
					}
					errMsg.style.display = "block";
				}
				if(fileName_flag == 1) { 
					errMsg.style.display = "none";
					var formData = new FormData();
					formData.append("myFile", document.getElementById("mca-library-magazinessubscribed-value").files[0]);
					formData.append("path", "MCA-Library");
					formData.append("filename", "mca_maga.pdf");
					formData.append("format", "pdf");
					filesAJAXRequest("CreateFile", fileUploaded, formData);
				}
			}
		}
	},
	"downloads" : {
		"actionurl" : "downloads",
		"navigate" : function(datas) {
			if(datas.code == 1) {
				alert(datas.message);
				window.location.href = "AdminPage?option=Downloads";
			} else {
				alert("Something went wrong, try again");
			}
		},
		"faculty" : {
			"actionurl" : "faculty",
			"navigate" : function(datas) {
				if(datas.code == 1) {
					alert(datas.message);
					window.location.href = "AdminPage?option=Downloads/Faculty";
				} else {
					alert("Something went wrong, try again");
				}
			},
			"load" : function(datas) {
				var facultyDiv = document.getElementById("downloads-faculty");
				var HTMLContent;
				HTMLContent = "<table>";
				HTMLContent += "<tr><th>S.No</th><th>Staff Name</th><th>Dept.</th><th>Paper</th><th>Name of the Journal</th><th>Delete</th></tr>";
				for(var i = 0; i < datas.length; i++) {																																	
					HTMLContent += "<tr><td>"+(i+1)+"</td><td>"+datas[i].staffName+"</td><td>"+datas[i].department+"</td><td>"+datas[i].paper+"</td><td>"+datas[i].journalName+"</td><td><a class=\"delete-icon\" href=\"#\" data-target="+datas[i].id+"></a></td></tr>";
				} 
				HTMLContent += "<tr><td colspan = \"6\"><input type = \"button\" value = \"Add Paper\" id = \"downloads-faculty-add-row\"></td></tr>";
				HTMLContent += "</table>";
				facultyDiv.innerHTML = HTMLContent;
				var addPaper = document.getElementById("downloads-faculty-add-row");
				addPaper.addEventListener("click", function() {
					window.location.href = "AdminPage?option=Downloads/Papers";
				});
				var dlt = document.getElementsByClassName("delete-icon");
				for(var i = 0; i < dlt.length; i++) {
					dlt[i].addEventListener("click", function() {
						AJAXRequest("DeleteFacultyPaper", renderHTML["downloads"]["faculty"]["navigate"], "id="+encodeURIComponent(this.getAttribute("data-target")));
					});
				}
			}
		},
		"papers" : {
			"actionurl" : "papers",
			"action" : function() {
				var staffName = document.getElementById("downloads-papers-staffname").value, staffName_flag = 1, staffName_regex = /^([a-zA-Z\. ]{1,})$/;
				var department = document.getElementById("downloads-papers-department").value, department_flag = 1, department_regex = /^[A-Za-z&"'/ ]{1,}$/;
				var paper = document.getElementById("downloads-papers-paper").value, paper_flag = 1, paper_regex = /^[A-Za-z\s&"':/., ]{1,}$/;
				var journal = document.getElementById("downloads-papers-journal").value, journal_flag = 1, journal_regex = /^[A-Za-z\s&"':/., ]{1,}$/;
				var allowedFiles = [".pdf", " .PDF"];
				var fileName = document.getElementById("downloads-papers-file").value, fileName_flag = 1, fileName_regex = new RegExp("([a-zA-Z0-9\s_\\.\-:()])+(" + allowedFiles.join('|') + ")$"); 
				var errMsg = document.getElementById("error-message");
				if(!staffName.match(staffName_regex)) {
					staffName_flag = 0;
					if(staffName.length == 0) {
						errMsg.innerHTML = "Please enter staff name";
					} else {
						errMsg.innerHTML = "Enter the name in correct format";
					}
					errMsg.style.display = "block";
				} else if(!department.match(department_regex)) {
					department_flag = 0;
					if(department.length == 0) {
						errMsg.innerHTML = "Please enter department";
					} else {
						errMsg.innerHTML = "Enter the department in correct format";
					}
					errMsg.style.display = "block";
				} else if(!paper.match(paper_regex)) {
					paper_flag = 0;
					if(paper.length == 0) {
						errMsg.innerHTML = "Please enter paper";
					} else {
						errMsg.innerHTML = "Enter the paper in correct format";
					}
					errMsg.style.display = "block";
				} else if(!journal.match(journal_regex)) {
					journal_flag = 0;
					if(journal.length == 0) {
						errMsg.innerHTML = "Please enter journal";
					} else {
						errMsg.innerHTML = "Enter the journal in correct format";
					}
					errMsg.style.display = "block";
				} else if(!fileName.toLowerCase().match(fileName_regex)) {
					fileName_flag = 0;
					if(fileName.length == 0) {
						errMsg.innerHTML = "Please upload a pdf file";
					} else {
						errMsg.innerHTML = "Uploaded file is not a pdf";
					}
					errMsg.style.display = "block";
				}
				if(staffName_flag == 1 && department_flag == 1 && paper_flag == 1 && journal_flag == 1 && fileName_flag == 1) {
					errMsg.style.display = "none";
					AJAXRequest("DownloadsPapers", updateFile, "staffname="+encodeURIComponent(staffName)+"&department="+encodeURIComponent(department)+"&paper="+encodeURIComponent(paper)+"&journal="+encodeURIComponent(journal)+"&filename="+encodeURIComponent(fileName));
				}
			}
		},
		"forms" : {
			"actionurl" : "forms",
			"action" : function() {
				var formName = document.getElementById("downloads-forms-formname").value, formName_flag = 1, formName_regex = /^([a-zA-Z0-9\.\s()/&'" ]{1,})$/;
				var working = document.getElementById("downloads-forms-working").value, working_flag = 1, working_regex = /^[A-Za-z&"'/ ]{1,}$/;
				var allowedFiles = [".pdf", " .PDF"];
				var fileName = document.getElementById("downloads-forms-file").value, fileName_flag = 1, fileName_regex = new RegExp("([a-zA-Z0-9\s_\\.\-:()])+(" + allowedFiles.join('|') + ")$"); 
				var errMsg = document.getElementById("error-message");
				if(!formName.match(formName_regex)) {
					formName_flag = 0;
					if(formName.length == 0) {
						errMsg.innerHTML = "Please enter form name";
					} else {
						errMsg.innerHTML = "Enter the form name in correct format";
					}
					errMsg.style.display = "block";
				} else if(!working.match(working_regex)) {
					working_flag = 0;
					if(working.length == 0) {
						errMsg.innerHTML = "Please enter STAFF/STUDENT";
					} else {
						errMsg.innerHTML = "Enter the STAFF/STUDENT in correct format";
					}
					errMsg.style.display = "block";
				} else if(!fileName.toLowerCase().match(fileName_regex)) {
					fileName_flag = 0;
					if(fileName.length == 0) {
						errMsg.innerHTML = "Please upload a pdf file";
					} else {
						errMsg.innerHTML = "Uploaded file is not a pdf";
					}
					errMsg.style.display = "block";
				}
				if(formName_flag == 1 && working_flag == 1 && fileName_flag == 1) {
					errMsg.style.display = "none";
					alert(fileName);
					AJAXRequest("DownloadsForms", updateFile, "formname="+encodeURIComponent(formName)+"&working="+encodeURIComponent(working)+"&filename="+encodeURIComponent(fileName));
				}
			}
		}
	},
	"free-e-resources" : {
		"actionurl" : "free-e-resources",
		"free-e-books" : {
			"actionurl" : "free-e-books",
			"action" : function() {
				var errMsg = document.getElementById("error-message");
				var link = document.getElementById("free-e-books-link").value, link_flag = 1;
				if(link.length == 0) {
					link_flag = 0;
					errMsg.innerHTML = "Please enter link";
					errMsg.style.display = "block";
				}
				if(link_flag == 1) {
					errMsg.style.display = "none";
					AJAXRequest("FreeEBooks", booksUpdated, "link="+encodeURIComponent(link));
				}
			}
		},
		"free-e-journals" : {
			"actionurl" : "free-e-journals",
			"action" : function() {
				var errMsg = document.getElementById("error-message");
				var link = document.getElementById("free-e-journals-link").value, link_flag = 1;
				if(link.length == 0) {
					link_flag = 0;
					errMsg.innerHTML = "Please enter link";
					errMsg.style.display = "block";
				}
				if(link_flag == 1) {
					errMsg.style.display = "none";
					AJAXRequest("FreeEJournals", booksUpdated, "link="+encodeURIComponent(link));
				}
			}
		},
		"free-newspapers" : {
			"actionurl" : "free-newspapers",
			"action" : function() {
				var errMsg = document.getElementById("error-message");
				var link = document.getElementById("free-newspapers-link").value, link_flag = 1;
				if(link.length == 0) {
					link_flag = 0;
					errMsg.innerHTML = "Please enter link";
					errMsg.style.display = "block";
				}
				if(link_flag == 1) {
					errMsg.style.display = "none";
					AJAXRequest("FreeNewspapers", booksUpdated, "link="+encodeURIComponent(link));
				}
			}
		}
	},
	"q.papers" : {
		"actionurl" : "qpapers",
		"action" : function() {
			var errMsg = document.getElementById("error-message");
			var allowedFiles = [".pdf", " .PDF"];
			var fileName = document.getElementById("qpapers-value").value, fileName_flag = 1, fileName_regex = new RegExp("([a-zA-Z0-9\s_\\.\-:()])+("+allowedFiles.join('|')+")$");
			var category = document.getElementById("qpapers-category").value, category_flag = 1;
			var degree = document.getElementById("qpapers-degree").value, degree_flag = 1;
			var department = document.getElementById("qpapers-department").value;
			var year =  document.getElementById("qpapers-year").value, year_flag = 1;
			var semester =  document.getElementById("qpapers-semester").value, semester_flag = 1;
			if(category == "Category") {
				category_flag = 0;
				errMsg.innerHTML = "Please select Category";
				errMsg.style.display = "block";
			} else if(degree == "Degree") {
				degree_flag = 0;
				errMsg.innerHTML = "Please select degree";
				errMsg.style.display = "block";
			} else if(year == "Year") {
				year_flag = 0;
				errMsg.innerHTML = "Please select year";
				errMsg.style.display = "block";
			} else if(semester == "Semester") {
				semester_flag = 0;
				errMsg.innerHTML = "Please select semester";
				errMsg.style.display = "block";
			} else if(!fileName.toLowerCase().match(fileName_regex)) {
				fileName_flag = 0;
				if(fileName.length == 0) {
					errMsg.innerHTML = "Please upload pdf file";
				} else {
					errMsg.innerHTML = "Uploaded file is not pdf";
				}
				errMsg.style.display = "block";
			}
			if(category_flag == 1 && degree_flag == 1 && fileName_flag == 1 && year_flag == 1 && semester_flag == 1 ) {
				errMsg.style.display = "none";
				if(degree == "M.E") {
					for(i = 0; i < department.length+2; i++) {
						if(department[i+1] == '(' ) {
							department = department.slice(0,i);
							break;
						}
					}
					var temp = degree+" ("+department+")";
					department = temp;
				} else if (degree == "MCA") {
					var temp = "M.C.A (Master of Computer Application)";
					department = temp;
				} else if (degree == "MBA") {
					var temp = "M.B.A (Master of Business Administration)";
					department = temp;
				}
				AJAXRequest("UpdateQPapers", updateFile, "department="+encodeURIComponent(department)+"&degree="+encodeURIComponent(degree)+"&category="+encodeURIComponent(category)+"&year="+encodeURIComponent(year)+"&semester="+encodeURIComponent(semester));
			}
		}
	},
	"settings" : {
		"actionurl" : "settings",
		"change-home-content" : {
			"actionurl" : "change-home-content",
			"navigate" : function(datas) {
				if(datas.code == 1) {
					alert(datas.message);
					window.location.href = "AdminPage?option=Settings";
				} else {
					alert("Something went wrong, please try again");
				}
			},
			"action" : function() {
				var content = document.getElementById("content").value;
				var errMsg = document.getElementById("error-message");
				if(content.length !== 0) {
					errMsg.style.display = "none";
					AJAXRequest("UpdateHomeContent", renderHTML["settings"]["change-home-content"]["navigate"], "content="+encodeURIComponent(content));
				} else {
					errMsg.style.display = "block";
					errMsg.innerText = "Please enter content";
				}
			}
		},
		"change-username" : {
			"actionurl" : "username",
			"action" : function() {
				var newUsername = document.getElementById("username").value, newUsername_flag = 1;
				var errMsg = document.getElementById("error-message");
				if(newUsername.length == 0) {
					newUsername_flag = 0;
					errMsg.innerHTML = "Please enter new username";
					errMsg.style.display = "block";
				}
				if(newUsername_flag == 1) { 
					errMsg.style.display = "none";
					AJAXRequest("ChangeUsername", checkChangeUser, "oldusername="+encodeURIComponent(userName)+"&newusername="+encodeURIComponent(newUsername));
				}
			}
		},
		"change-password" : {
			"actionurl" : "password",
			"action" : function() {
				var newPassword = document.getElementById("password").value, newPassword_flag = 1;
				var errMsg = document.getElementById("error-message");
				if(newPassword.length == 0) {
					newPassword_flag = 0;
					errMsg.innerHTML = "Please enter new password";
					errMsg.style.display = "block";
				}
				if(newPassword_flag == 1) { 
					errMsg.style.display = "none";
					AJAXRequest("UpdatePassword", checkChangePass, "username="+encodeURIComponent(userName)+"&newpassword="+encodeURIComponent(newPassword));				
				}
			}
		},
		"add-department" : {
			"actionurl" : "add-department",
			"action" : function() {
				var degree = document.getElementById("add-department-degree").value, degree_flag = 1;
				var department = document.getElementById("department").value, department_flag = 1, department_regex = /^[a-zA-Z0-9\s_\\.\-:()&"']{1,}$/;
				var errMsg = document.getElementById("error-message");
				if(degree == "Degree") {
					degree_flag = 0;
					errMsg.innerHTML = "Please select degree";
					errMsg.style.display = "block";
				} else if(!department.match(department_regex)) {
					department_flag = 0;
					if(department.length == 0) {
						errMsg.innerHTML = "Please enter new department";
					} else {
						errMsg.innerHTML = "Enter department in correct format";
					}
					errMsg.style.display = "block";
				}
				if(degree_flag == 1 && department_flag == 1) {
					errMsg.style.display = "none";
					AJAXRequest("AddDepartments", checkDepartment, "degree="+encodeURIComponent(degree)+"&department="+encodeURIComponent(department));
				}
			}
		},
		"delete-department" : {
			"actionurl" : "delete-department",
			"action" : function() {
				var degree = document.getElementById("del-degree").value, degree_flag = 1;
				var department = document.getElementById("del-department").value, department_flag = 1;
				var errMsg = document.getElementById("error-message");
				if(degree == "Degree") {
					degree_flag = 0;
					errMsg.innerHTML = "Please select degree";
					errMsg.style.display = "block";
				} else if(department == "none") {
					department_flag = 0;
					errMsg.innerHTML = "Please select department";
					errMsg.style.display = "block";
				}
				if(degree_flag == 1 && department_flag == 1) {
					errMsg.style.display = "none";
					AJAXRequest("DeleteDepartment", checkDepartment, "degree="+encodeURIComponent(degree)+"&department="+encodeURIComponent(department));
				}
			}
		}
	}
}

window.addEventListener("load",checkCookie);

function AJAXRequest(url, func, args) {
	if(args === undefined) args= "";
	var xhr = new XMLHttpRequest();
	xhr.open("POST",url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(args);
	xhr.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			func(JSON.parse(this.responseText));
		}
	};
}

function filesAJAXRequest(url, func, formData) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST",url, true);
	xhr.setRequestHeader("enctype", "multipart/form-data");
	xhr.send(formData);
	xhr.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			fileUploaded();
		}
	};
}

function updateQPaperYears(){
	var year = "<option selected disabled>Year</option>";
	var elem = document.getElementById("qpapers-year");
	var obj = new Date();
	var date = obj.getFullYear();
	var month = obj.getMonth();
	var base = 2014;
	var category = document.getElementById("qpapers-category").value;
	if(category == "QPapers") {
		for(i = base; i <= date; i++) {
			if(i == date) {
				if(month >= 5) {
					year += "<option>April "+i+"</option>";
				}
			} else {
				year+="<option>April "+i+"</option>";
			}
			if(i == date)
			{
				if(month == 12) {
					year+="<option>November "+i+"</option>";
				}
			} else {
				year+="<option>November "+i+"</option>";
			}
		}
	} else if ( category == "Syllabus" ) {
		for(i = base; i <= date; i++) {
			year += "<option>"+i+"</option>";
		}
	}
	elem.innerHTML = year;
}

function updateQPaperSem() {
	var sem = "<option selected disabled>Semester</option>";
	var category = document.getElementById("qpapers-category").value;
	var year = document.getElementById("qpapers-year").value;
	var degree = document.getElementById("qpapers-degree").value;
	var elem = document.getElementById("qpapers-semester");
	if(category == "QPapers") {
		if(year[0] == 'N') {
			sem += "<option>I</option>";
			sem += "<option>III</option>";
			if(degree == "B.E") {
				sem += "<option>V</option>";
				sem += "<option>VII</option>";
			}
		} else if(year[0] == 'A') {
			sem += "<option>II</option>";
			sem += "<option>IV</option>";
			if(degree == "B.E") {
				sem += "<option>VI</option>";
				sem += "<option>VIII</option>";
			}
		}
	} else if (category == "Syllabus") {
		sem += "<option>I,II</option>";
		sem += "<option>III,IV</option>";
		if(degree == "B.E") {
			sem += "<option>V,VI</option>";
			sem += "<option>VII,VIII</option>";
		}	
	} 
	elem.innerHTML = sem;
}

function updateFile(datas) {
	if(datas.path == "0") {
		alert(datas.message);
	} else {
		var formData = new FormData();
		var id = null;
		if(datas.path == "Collections") {
			id = "collections-cdtable-value";
		} else if(datas.path == "Journals/National" || datas.path == "Journals/InterNational") {
			id = "journals-cdtable-value";
		} else if(datas.path == "Magazines/National" || datas.path == "Magazines/InterNational") {
			id = "magazines-cdtable-value";
		} else if(datas.path == "Downloads/Faculty-member") {
			id = "downloads-papers-file";
		} else if(datas.path == "Downloads/Forms") {
			id = "downloads-forms-file";
		} else {
			id = "qpapers-value";
		}
		formData.append("myFile", document.getElementById(id).files[0]);
		formData.append("filename", datas.filename);
		formData.append("format", "pdf");
		formData.append("path", datas.path);
		filesAJAXRequest("CreateFile", fileUploaded, formData);
	}
}

function fileUploaded() {
	window.location.href = "AdminPage?option=Settings";
}

function checkCookie() {
	AJAXRequest("CheckCookie", loadUsers, "check=admin");	
}

function loadUsers(datas) {
	if(datas.code == "1") {
		userName = datas.username;
		var btn;
		if(document.getElementById("logout-btn") !== null) {
			btn = document.getElementById("logout-btn");
			btn.addEventListener("click", function() {
				AJAXRequest("DeleteCookie", checkDelete, "delete=admin");
			});
		}
		if(document.getElementById("feedbacks-btn") !== null) {
			btn = document.getElementById("feedbacks-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Feedbacks";
			});
		}
		if(document.getElementById("shownotifications") !== null) {
			AJAXRequest("GetFeedbacks", showFeedbackNotifications);
		}
		if(document.getElementById(renderHTML["collections"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["collections"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Collections";
			});
		}
		if(document.getElementById(renderHTML["collections"]["actionurl"]+"-"+renderHTML["collections"]["newarrival"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["collections"]["actionurl"]+"-"+renderHTML["collections"]["newarrival"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Collections/NewArrival";
			});
		}
		if(document.getElementById(renderHTML["collections"]["actionurl"]+"-"+renderHTML["collections"]["newarrival"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["collections"]["actionurl"]+"-"+renderHTML["collections"]["newarrival"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["collections"]["newarrival"]["action"]);
		}
		if(document.getElementById(renderHTML["collections"]["actionurl"]+"-"+renderHTML["collections"]["image"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["collections"]["actionurl"]+"-"+renderHTML["collections"]["image"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Collections/Image";
			});
		}
		if(document.getElementById(renderHTML["collections"]["actionurl"]+"-"+renderHTML["collections"]["image"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["collections"]["actionurl"]+"-"+renderHTML["collections"]["image"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["collections"]["image"]["action"]);
		}
		if(document.getElementById(renderHTML["collections"]["actionurl"]+"-"+renderHTML["collections"]["cdtable"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["collections"]["actionurl"]+"-"+renderHTML["collections"]["cdtable"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Collections/CDTable";
			});
		}
		if(document.getElementById(renderHTML["collections"]["actionurl"]+"-"+renderHTML["collections"]["cdtable"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["collections"]["actionurl"]+"-"+renderHTML["collections"]["cdtable"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["collections"]["cdtable"]["action"]);
		}
		if(document.getElementById(renderHTML["collections"]["actionurl"]+"-"+renderHTML["collections"]["cdtable"]["actionurl"]) !== null) {
			AJAXRequest("GetBEDepartments", setBEDepartments);
		}
		if(document.getElementById(renderHTML["collections"]["actionurl"]+"-"+renderHTML["collections"]["cdtable"]["actionurl"]+"-degree") !== null) {
			btn = document.getElementById(renderHTML["collections"]["actionurl"]+"-"+renderHTML["collections"]["cdtable"]["actionurl"]+"-degree");
			btn.addEventListener("change", function() {
				updateDepartmentsDropdown("collections-cdtable");
			});
		}
		if(document.getElementById(renderHTML["journals"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["journals"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Journals";
			});
		}
		if(document.getElementById(renderHTML["journals"]["actionurl"]+"-"+renderHTML["journals"]["newarrival"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["journals"]["actionurl"]+"-"+renderHTML["journals"]["newarrival"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Journals/NewArrival";
			});
		}
		if(document.getElementById(renderHTML["journals"]["actionurl"]+"-"+renderHTML["journals"]["newarrival"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["journals"]["actionurl"]+"-"+renderHTML["journals"]["newarrival"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["journals"]["newarrival"]["action"]);
		}
		if(document.getElementById(renderHTML["journals"]["actionurl"]+"-"+renderHTML["journals"]["cdtable"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["journals"]["actionurl"]+"-"+renderHTML["journals"]["cdtable"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Journals/CDTable";
			});
		}
		if(document.getElementById(renderHTML["journals"]["actionurl"]+"-"+renderHTML["journals"]["cdtable"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["journals"]["actionurl"]+"-"+renderHTML["journals"]["cdtable"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["journals"]["cdtable"]["action"]);
		}
		if(document.getElementById(renderHTML["journals"]["actionurl"]+"-"+renderHTML["journals"]["cdtable"]["actionurl"]) !== null) {
			AJAXRequest("GetBEDepartments", setBEDepartments);
		}
		if(document.getElementById(renderHTML["journals"]["actionurl"]+"-"+renderHTML["journals"]["cdtable"]["actionurl"]+"-degree") !== null) {
			btn = document.getElementById(renderHTML["journals"]["actionurl"]+"-"+renderHTML["journals"]["cdtable"]["actionurl"]+"-degree");
			btn.addEventListener("change", function() {
				updateDepartmentsDropdown("journals-cdtable");
			});
		}
		if(document.getElementById(renderHTML["magazines"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["magazines"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Magazines";
			});
		}
		if(document.getElementById(renderHTML["magazines"]["actionurl"]+"-"+renderHTML["magazines"]["newarrival"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["magazines"]["actionurl"]+"-"+renderHTML["magazines"]["newarrival"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Magazines/NewArrival";
			});
		}
		if(document.getElementById(renderHTML["magazines"]["actionurl"]+"-"+renderHTML["magazines"]["newarrival"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["magazines"]["actionurl"]+"-"+renderHTML["magazines"]["newarrival"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["magazines"]["newarrival"]["action"]);
		}
		if(document.getElementById(renderHTML["magazines"]["actionurl"]+"-"+renderHTML["magazines"]["cdtable"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["magazines"]["actionurl"]+"-"+renderHTML["magazines"]["cdtable"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Magazines/CDTable";
			});
		}
		if(document.getElementById(renderHTML["magazines"]["actionurl"]+"-"+renderHTML["magazines"]["cdtable"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["magazines"]["actionurl"]+"-"+renderHTML["magazines"]["cdtable"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["magazines"]["cdtable"]["action"]);
		}
		if(document.getElementById(renderHTML["magazines"]["actionurl"]+"-"+renderHTML["magazines"]["cdtable"]["actionurl"]) !== null) {
			AJAXRequest("GetBEDepartments", setBEDepartments);
		}
		if(document.getElementById(renderHTML["magazines"]["actionurl"]+"-"+renderHTML["magazines"]["cdtable"]["actionurl"]+"-degree") !== null) {
			btn = document.getElementById(renderHTML["magazines"]["actionurl"]+"-"+renderHTML["magazines"]["cdtable"]["actionurl"]+"-degree");
			btn.addEventListener("change", function() {
				updateDepartmentsDropdown("magazines-cdtable");
			});
		}
		if(document.getElementById(renderHTML["e-journals"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["e-journals"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=E-Journals";
			});
		}
		if(document.getElementById(renderHTML["e-journals"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["e-journals"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["e-journals"]["action"]);
		}
		if(document.getElementById(renderHTML["mbalibrary"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["mbalibrary"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=MBALibrary"; 
			});
		}
		if(document.getElementById(renderHTML["mbalibrary"]["actionurl"]+"-"+renderHTML["mbalibrary"]["newarrival"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["mbalibrary"]["actionurl"]+"-"+renderHTML["mbalibrary"]["newarrival"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=MBALibrary/NewArrival";
			});
		}
		if(document.getElementById(renderHTML["mbalibrary"]["actionurl"]+"-"+renderHTML["mbalibrary"]["newarrival"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["mbalibrary"]["actionurl"]+"-"+renderHTML["mbalibrary"]["newarrival"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["mbalibrary"]["newarrival"]["action"]);
		}
		if(document.getElementById(renderHTML["mbalibrary"]["actionurl"]+"-"+renderHTML["mbalibrary"]["books"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["mbalibrary"]["actionurl"]+"-"+renderHTML["mbalibrary"]["books"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=MBALibrary/Books";
			});
		}
		if(document.getElementById(renderHTML["mbalibrary"]["actionurl"]+"-"+renderHTML["mbalibrary"]["books"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["mbalibrary"]["actionurl"]+"-"+renderHTML["mbalibrary"]["books"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["mbalibrary"]["books"]["action"]);
		}
		if(document.getElementById(renderHTML["mbalibrary"]["actionurl"]+"-"+renderHTML["mbalibrary"]["journalssubscribed"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["mbalibrary"]["actionurl"]+"-"+renderHTML["mbalibrary"]["journalssubscribed"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=MBALibrary/Journals Subscribed";
			});
		}
		if(document.getElementById(renderHTML["mbalibrary"]["actionurl"]+"-"+renderHTML["mbalibrary"]["journalssubscribed"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["mbalibrary"]["actionurl"]+"-"+renderHTML["mbalibrary"]["journalssubscribed"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["mbalibrary"]["journalssubscribed"]["action"]);
		}
		if(document.getElementById(renderHTML["mbalibrary"]["actionurl"]+"-"+renderHTML["mbalibrary"]["magazinessubscribed"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["mbalibrary"]["actionurl"]+"-"+renderHTML["mbalibrary"]["magazinessubscribed"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=MBALibrary/Magazines Subscribed";
			});
		}
		if(document.getElementById(renderHTML["mbalibrary"]["actionurl"]+"-"+renderHTML["mbalibrary"]["magazinessubscribed"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["mbalibrary"]["actionurl"]+"-"+renderHTML["mbalibrary"]["magazinessubscribed"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["mbalibrary"]["magazinessubscribed"]["action"]);
		}
		if(document.getElementById(renderHTML["mcalibrary"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["mcalibrary"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=MCALibrary"; 
			});
		}
		if(document.getElementById(renderHTML["mcalibrary"]["actionurl"]+"-"+renderHTML["mcalibrary"]["newarrival"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["mcalibrary"]["actionurl"]+"-"+renderHTML["mcalibrary"]["newarrival"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=MCALibrary/NewArrival";
			});
		}
		if(document.getElementById(renderHTML["mcalibrary"]["actionurl"]+"-"+renderHTML["mcalibrary"]["newarrival"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["mcalibrary"]["actionurl"]+"-"+renderHTML["mcalibrary"]["newarrival"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["mcalibrary"]["newarrival"]["action"]);
		}
		if(document.getElementById(renderHTML["mcalibrary"]["actionurl"]+"-"+renderHTML["mcalibrary"]["books"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["mcalibrary"]["actionurl"]+"-"+renderHTML["mcalibrary"]["books"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=MCALibrary/Books";
			});
		}
		if(document.getElementById(renderHTML["mcalibrary"]["actionurl"]+"-"+renderHTML["mcalibrary"]["books"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["mcalibrary"]["actionurl"]+"-"+renderHTML["mcalibrary"]["books"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["mcalibrary"]["books"]["action"]);
		}
		if(document.getElementById(renderHTML["mcalibrary"]["actionurl"]+"-"+renderHTML["mcalibrary"]["journalssubscribed"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["mcalibrary"]["actionurl"]+"-"+renderHTML["mcalibrary"]["journalssubscribed"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=MCALibrary/Journals Subscribed";
			});
		}
		if(document.getElementById(renderHTML["mcalibrary"]["actionurl"]+"-"+renderHTML["mcalibrary"]["journalssubscribed"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["mcalibrary"]["actionurl"]+"-"+renderHTML["mcalibrary"]["journalssubscribed"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["mcalibrary"]["journalssubscribed"]["action"]);
		}
		if(document.getElementById(renderHTML["mcalibrary"]["actionurl"]+"-"+renderHTML["mcalibrary"]["magazinessubscribed"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["mcalibrary"]["actionurl"]+"-"+renderHTML["mcalibrary"]["magazinessubscribed"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=MCALibrary/Magazines Subscribed";
			});
		}
		if(document.getElementById(renderHTML["mcalibrary"]["actionurl"]+"-"+renderHTML["mcalibrary"]["magazinessubscribed"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["mcalibrary"]["actionurl"]+"-"+renderHTML["mcalibrary"]["magazinessubscribed"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["mcalibrary"]["magazinessubscribed"]["action"]);
		}
		if(document.getElementById(renderHTML["downloads"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["downloads"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Downloads";
			});
		}
		if(document.getElementById(renderHTML["downloads"]["actionurl"]+"-"+renderHTML["downloads"]["faculty"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["downloads"]["actionurl"]+"-"+renderHTML["downloads"]["faculty"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Downloads/Faculty";
			});
		}
		if(document.getElementById(renderHTML["downloads"]["actionurl"]+"-"+renderHTML["downloads"]["faculty"]["actionurl"]) !== null) {
			AJAXRequest("GetFacultyPapers", renderHTML["downloads"]["faculty"]["load"]);
		}
		if(document.getElementById(renderHTML["downloads"]["actionurl"]+"-"+renderHTML["downloads"]["papers"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["downloads"]["actionurl"]+"-"+renderHTML["downloads"]["papers"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Downloads/Papers";
			});
		}
		if(document.getElementById(renderHTML["downloads"]["actionurl"]+"-"+renderHTML["downloads"]["papers"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["downloads"]["actionurl"]+"-"+renderHTML["downloads"]["papers"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["downloads"]["papers"]["action"]);
		}
		if(document.getElementById(renderHTML["downloads"]["actionurl"]+"-"+renderHTML["downloads"]["forms"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["downloads"]["actionurl"]+"-"+renderHTML["downloads"]["forms"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Downloads/Forms";
			});
		}
		if(document.getElementById(renderHTML["downloads"]["actionurl"]+"-"+renderHTML["downloads"]["forms"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["downloads"]["actionurl"]+"-"+renderHTML["downloads"]["forms"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["downloads"]["forms"]["action"]);
		}
		if(document.getElementById(renderHTML["free-e-resources"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["free-e-resources"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Free-E-Resources";
			});
		}
		if(document.getElementById(renderHTML["free-e-resources"]["free-e-books"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["free-e-resources"]["free-e-books"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Free-E-Resources/Free-E-Books";
			});
		}
		if(document.getElementById(renderHTML["free-e-resources"]["free-e-journals"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["free-e-resources"]["free-e-journals"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Free-E-Resources/Free-E-Journals";
			});
		}
		if(document.getElementById(renderHTML["free-e-resources"]["free-newspapers"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["free-e-resources"]["free-newspapers"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Free-E-Resources/Free-Newspapers";
			});
		}
		if(document.getElementById(renderHTML["free-e-resources"]["free-e-books"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["free-e-resources"]["free-e-books"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["free-e-resources"]["free-e-books"]["action"]);
		}
		if(document.getElementById(renderHTML["free-e-resources"]["free-e-journals"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["free-e-resources"]["free-e-journals"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["free-e-resources"]["free-e-journals"]["action"]);
		}
		if(document.getElementById(renderHTML["free-e-resources"]["free-newspapers"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["free-e-resources"]["free-newspapers"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["free-e-resources"]["free-newspapers"]["action"]);
		}
		if(document.getElementById(renderHTML["q.papers"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["q.papers"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=Q.Papers";
			});
		}
		if(document.getElementById(renderHTML["q.papers"]["actionurl"]) !== null) {
			AJAXRequest("GetBEDepartments", setBEDepartments);
			updateQPaperYears();
			updateQPaperSem();
		}
		if(document.getElementById(renderHTML["q.papers"]["actionurl"]+"-category") !== null) {
			btn = document.getElementById(renderHTML["q.papers"]["actionurl"]+"-category");
			btn.addEventListener("change", function() {
				updateQPaperYears();
				updateQPaperSem();
			});
		}
		if(document.getElementById(renderHTML["q.papers"]["actionurl"]+"-degree") !== null) {
			btn = document.getElementById(renderHTML["q.papers"]["actionurl"]+"-degree");
			btn.addEventListener("change", function() {
				updateQPaperSem();
			});
		}
		if(document.getElementById(renderHTML["q.papers"]["actionurl"]+"-year") !== null) {
			btn = document.getElementById(renderHTML["q.papers"]["actionurl"]+"-year");
			btn.addEventListener("change", function() {
				updateQPaperSem();
			});
		}
		if(document.getElementById(renderHTML["q.papers"]["actionurl"]) !== null) {
			btn = document.getElementById(renderHTML["q.papers"]["actionurl"]+"-degree");
			btn.addEventListener("change", function() {
				updateDepartmentsDropdown("qpapers");
			});
		}
		if(document.getElementById(renderHTML["q.papers"]["actionurl"]+"-upld") !== null) {
			btn = document.getElementById(renderHTML["q.papers"]["actionurl"]+"-upld");
			btn.addEventListener("click", renderHTML["q.papers"]["action"]);
		}
		if(document.getElementById("settings-btn") !== null) {
			btn = document.getElementById("settings-btn");
			btn.addEventListener("click", function() {	
				window.location.href = "AdminPage?option=Settings";
			});
		}
		if(document.getElementById(renderHTML["settings"]["change-home-content"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["settings"]["change-home-content"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=change-home-content";
			});
		}
		if(document.getElementById(renderHTML["settings"]["change-home-content"]["actionurl"]+"-sub") !== null) {
			btn = document.getElementById(renderHTML["settings"]["change-home-content"]["actionurl"]+"-sub");
			btn.addEventListener("click", renderHTML["settings"]["change-home-content"]["action"]);
		}
		if(document.getElementById("changeuser-btn") !== null) {
			btn = document.getElementById("changeuser-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=change-username";
			});
		}
		if(document.getElementById(renderHTML["settings"]["change-username"]["actionurl"]+"-sub") !== null) {
			btn = document.getElementById(renderHTML["settings"]["change-username"]["actionurl"]+"-sub");
			btn.addEventListener("click", renderHTML["settings"]["change-username"]["action"]);
		}
		if(document.getElementById("changepass-btn") !== null) {
			btn = document.getElementById("changepass-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=change-password";
			});
		}
		if(document.getElementById(renderHTML["settings"]["change-password"]["actionurl"]+"-sub") !== null) {
			btn = document.getElementById(renderHTML["settings"]["change-password"]["actionurl"]+"-sub");
			btn.addEventListener("click", renderHTML["settings"]["change-password"]["action"]);
		}
		if(document.getElementById(renderHTML["settings"]["add-department"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["settings"]["add-department"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=add-department";
			});
		}
		if(document.getElementById(renderHTML["settings"]["add-department"]["actionurl"]+"-sub") !== null) {
			btn = document.getElementById(renderHTML["settings"]["add-department"]["actionurl"]+"-sub");
			btn.addEventListener("click", renderHTML["settings"]["add-department"]["action"]);
		}
		if(document.getElementById(renderHTML["settings"]["delete-department"]["actionurl"]+"-btn") !== null) {
			btn = document.getElementById(renderHTML["settings"]["delete-department"]["actionurl"]+"-btn");
			btn.addEventListener("click", function() {
				window.location.href = "AdminPage?option=delete-department";
			});
		}
		if(document.getElementById(renderHTML["settings"]["delete-department"]["actionurl"]+"-sub") !== null) {
 			btn = document.getElementById(renderHTML["settings"]["delete-department"]["actionurl"]+"-sub");
			btn.addEventListener("click", renderHTML["settings"]["delete-department"]["action"]);
		}
		if(document.getElementById(renderHTML["settings"]["delete-department"]["actionurl"]) !== null) {
			AJAXRequest("GetBEDepartments", setBEDepartments);
		}
		if(document.getElementById(renderHTML["settings"]["delete-department"]["actionurl"]) !== null) {
			btn = document.getElementById("del-degree");
			btn.addEventListener("change", function() {
				updateDepartmentsDropdown("del");
			});
		}
	} else {
		window.location.href = "adminlogin.html";
	}
}

function checkDelete(datas) {
	if(datas.code == "1") {
		window.location.href = "adminlogin.html";
	}
}

function checkChangePass(datas) {
	if(datas.code == "1") {
		alert(datas.message);
		document.location.href = "AdminPage?option=Settings";		
	} else {
		alert(datas.message);
	}
}

function checkChangeUser(datas) {
	if(datas.code == "1") {
		alert("Username is changed");
		userName = datas.username;
		document.location.href = "AdminPage?option=Settings";		
	} else {
		alert(datas.message);
	}
}

function checkDeleted(datas) {
	if(datas.code == "1") {
		alert(datas.message);
		AJAXRequest("GetFeedbacks", showFeedbackNotifications);
	}
}

function showFeedbackNotifications(datas) {
	var i;
	feedbacks = datas;
	var elem = document.getElementById("shownotifications");
	var feedbackContent = "<div class=\"content-holder\">Feedbacks</div>";
	feedbackContent += "<div class=\"border\"></div>";
	feedbackContent += "<div class=\"notifications\">";
		feedbackContent += "<div class=\"space\"></div>";
		feedbackContent += "<table class=\"notification-tbl\">";
		if(datas.length == 0)
			feedbackContent += "<tr class=\"no-notifications\"><td>No notifications</td></tr>";
		else {
			for(i = 0; i < datas.length; i++) {
					if(feedbacks[i].id == feedbackId) {
						feedbackContent += "<div class=\"feedback-content\">";
							feedbackContent += "<ul>";
								feedbackContent += "<li><p id=\"name\">"+feedbacks[i].name+"</p></li>";
								feedbackContent += "<li><p id=\"roll-no\">"+feedbacks[i].rollNo+"</p></li>";
								feedbackContent += "<li><p id=\"mob-no\">"+feedbacks[i].mobNo+"</p></li>";								
								feedbackContent += "<li><p id=\"email-id\">"+feedbacks[i].emailId+"</p></li>";
							feedbackContent += "<ul><br>";
							feedbackContent += "<p id=\"feedback\">"+feedbacks[i].feedback+"</p>";
							feedbackContent += "<a class=\"delete-icon\" href=\"#\" data-target="+feedbacks[i].id+"></a>"
						feedbackContent += "</div>";
					} else {
						feedbackContent += "<tr><td>"+feedbacks[i].name+"</td><td>"+feedbacks[i].emailId+"</td><td><a class=\"view-feedback\" data-target="+feedbacks[i].id+" href=\"#\" >view</a></td></tr>";
					}
			}
		}
		feedbackContent += "</table>";
	feedbackContent += "</div>";
	feedbackContent += "<div class=\"border\"></div>";
	elem.innerHTML = feedbackContent;
	var viewFeedback = document.getElementsByClassName("view-feedback");
	for(i = 0; i < viewFeedback.length; i++) {
		viewFeedback[i].addEventListener("click", function() {
			feedbackId = this.getAttribute("data-target");
			showFeedbackNotifications(datas);
		});
	}
	var dltFeedback = document.getElementsByClassName("delete-icon");
	for(i = 0; i < dltFeedback.length; i++) {
		dltFeedback[i].addEventListener("click", function() {
			AJAXRequest("DeleteFeedback", checkDeleted, "id="+this.getAttribute("data-target"));
		});
	}
}


function setBEDepartments(datas) {
	BEDepartmentsList = datas;
	AJAXRequest("GetMEDepartments", setMEDepartments);
}

function setMEDepartments(datas) {
	MEDepartmentsList = datas;
	if(document.getElementById("collections-cdtable") !== null) {
		updateDepartmentsDropdown("collections-cdtable");
	} else if(document.getElementById("journals-cdtable") !== null) {
		updateDepartmentsDropdown("journals-cdtable");
	} else if(document.getElementById("magazines-cdtable") !== null) {
		updateDepartmentsDropdown("magazines-cdtable");
	} else if(document.getElementById("delete-department") !== null) {
		updateDepartmentsDropdown("del");
	} else if(document.getElementById(renderHTML["q.papers"]["actionurl"]+"-department") !== null) {
		updateDepartmentsDropdown("qpapers");
	}
}

function updateDepartmentsDropdown(id) {
	var degree = document.getElementById(id+"-degree").value;
	var dropDownList;
	if(degree == "B.E") {
		for( i = 0; i < BEDepartmentsList.length; i++) {
			dropDownList += "<option>"+BEDepartmentsList[i]+"</option>";
		}
	} else if(degree == "M.E") {
		for( i = 0; i < MEDepartmentsList.length; i++) {
			dropDownList += "<option>"+MEDepartmentsList[i]+"</option>";
		}
	} else {
		dropDownList += "<option selected disabled>none</option>";
	}
	var departments = document.getElementById(id+"-department");
	departments.innerHTML = dropDownList;
}

function booksUpdated(datas) {
	if(datas.code == "1") {
		alert(datas.message);
		window.location.href = "AdminPage?option=Settings";
	} else {
		alert(datas.message);
	}
}

function checkDepartment(datas) {
	if(datas.code == 1) {
		alert(datas.message);
		window.location.href = "AdminPage?option=Settings";
	} else {
		alert(datas.message);
	}
}