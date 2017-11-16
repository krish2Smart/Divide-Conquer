	var jsonobj="";
	function insertHome()
{
    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.name == null ) {
        	sessionStorage.name = "Home";
        	document.getElementById("title").innerHTML = "<title>Library-"+sessionStorage.name+"</title>";
        } 
    }
    else
    	{
    	window.alert("upgrade your browser!");
    	}
    	var req = new XMLHttpRequest();
    	req.open( "POST" , "HTML/"+sessionStorage.name+".html" , true);
    	req.send();
    	req.onreadystatechange = function(){
    		if(this.readyState == 4 && this.status == 200 )
    			{
    				var htmlContent = this.responseText;
    				document.getElementById("content-holder").innerHTML = htmlContent ;
    				document.getElementById("title").innerHTML = "<title>Library-"+sessionStorage.name+"</title>";
    				var xhr = new XMLHttpRequest();
    				xhr.open("POST", "Home", true);
    				xhr.send();
    				xhr.onreadystatechange = function() {
    					if(this.readyState == 4 && this.status == 200) {
    						document.getElementById("home-content").innerHTML = JSON.parse(this.responseText).message;
    					}
    				}
    			}
    	};
    	if(sessionStorage.name == "Downloads")
    		{
    			download_table("Downloads");
    		}
}
function inputHtml(file_name)
{
	sessionStorage.name = file_name;
}
function loadtable_1()
{
var req = new XMLHttpRequest();
var sno =1 ;
req.open("post","FreeEBooks" ,true);
req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
req.send();
req.onreadystatechange = function(){
if(this.readyState == 4 && this.status == 200 )
	{
	var html = "<table class = 'lib-fre_inner_table_borderset' width='450px' ><tr class = 'lib-fre_inner_table_content_tr' ><th class = 'lib-fre_inner_table_content_heading_text' 	colspan = 2 >FREE E-BOOKS</th></tr>";
	html += "<tr class = 'lib-fre_inner_table_content_tr' ><td class = 'lib-fre_inner_table_content_tds' >S.No</td>";
	html += "<td class = 'lib-fre_inner_table_content_tds' >LINKS</td></tr>";
	var sno=0;
	var htmlContent = JSON.parse(this.responseText);
	for(i in htmlContent)
		{
		html += "<tr class = 'lib-fre_inner_table_content_tr' ><td class = 'lib-fre_inner_table_content_tds' >"+sno+"</td>";
		html += "<td class = 'lib-fre_inner_table_content_tds' ><a href='http://"+htmlContent[i]+"'>"+htmlContent[i]+"</a></td></tr>";
		sno += 1;
		}
	html += "</table>";
	var ele = document.getElementById("table1");
	ele.innerHTML=html;
	loadtable_2();
	}
	}
}
function loadtable_2()
{
var req = new XMLHttpRequest();
var sno =1 ;
req.open("post","FreeEJous" ,true);
req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
req.send();
req.onreadystatechange = function(){
if(this.readyState == 4 && this.status == 200 )
{
var html = "<table class = 'lib-fre_inner_table_borderset' width='450px' ><tr class = 'lib-fre_inner_table_content_tr' ><th class = 'lib-fre_inner_table_content_heading_text' 	colspan = 2 >FREE E-JOURNALS</th></tr>";
html += "<tr class = 'lib-fre_inner_table_content_tr' ><td class = 'lib-fre_inner_table_content_tds' >S.No</td>";
html += "<td class = 'lib-fre_inner_table_content_tds' >LINKS</td></tr>";
var sno=0;
var htmlContent = JSON.parse(this.responseText);
for(i in htmlContent)
	{
	html += "<tr class = 'lib-fre_inner_table_content_tr' ><td class = 'lib-fre_inner_table_content_tds' >"+sno+"</td>";
	html += "<td class = 'lib-fre_inner_table_content_tds' ><a href='http://"+htmlContent[i]+"'>"+htmlContent[i]+"</a></td></tr>";
	sno += 1;
	}
html += "</table>";
var ele = document.getElementById("table2");
ele.innerHTML=html;
loadtable_3();
}
}
}
function loadtable_3()
{
var req = new XMLHttpRequest();
var sno =1 ;
req.open("post","FreeENews" ,true);
req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
req.send();
req.onreadystatechange = function(){
if(this.readyState == 4 && this.status == 200 )
{
var html = "<table class = 'lib-fre_inner_table_borderset'  width='450px'><tr class = 'lib-fre_inner_table_content_tr' ><th class = 'lib-fre_inner_table_content_heading_text' 	colspan = 2 >FREE E-NEWS</th></tr>";
html += "<tr class = 'lib-fre_inner_table_content_tr' ><td class = 'lib-fre_inner_table_content_tds' >S.No</td>";
html += "<td class = 'lib-fre_inner_table_content_tds' >LINKS</td></tr>";
var sno=0;
var htmlContent = JSON.parse(this.responseText);
for(i in htmlContent)
	{
	html += "<tr class = 'lib-fre_inner_table_content_tr' ><td class = 'lib-fre_inner_table_content_tds' >"+sno+"</td>";
	html += "<td class = 'lib-fre_inner_table_content_tds' ><a href='http://"+htmlContent[i]+"'>"+htmlContent[i]+"</a></td></tr>";
	sno += 1;
	}
html += "</table>";
var ele = document.getElementById("table3");
ele.innerHTML=html;
}
}
}
function col_table()
	{
		var req = new XMLHttpRequest();
		var sno =1 ;
		req.open("post","Col_Table" ,true);
		req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		req.send();
		req.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200 )
			{
				var html = "<table class = 'lib-col_inner_table_borderset'><tr><th class = 'lib-col_inner_table_th' colspan = 4 >" ;
				html += "LIST OF CD'S</th></tr>";
				html += "<tr class = 'lib-col_inner_table_content_tr' ><td class = 'lib-fre_inner_table_content_tds' >S.NO</td>";
				html += "<td class = 'lib-col_inner_table_content_tds_heading1' >DEPARTMENT</td>";
				html += "<td class = 'lib-col_inner_table_content_tds_heading' >DOWNLOAD</td>";
				html += "<td class = 'lib-col_inner_table_content_tds_heading' >No. of CD's</td></tr>";
				var htmlContent = JSON.parse(this.responseText);
				for(var i in htmlContent)
				{
					var department = htmlContent[i].department;
					var file = htmlContent[i].fileName;
					var count = htmlContent[i].cd_count;
					html += "<tr class = 'lib-col_inner_table_content_tr' ><td class = 'lib-fre_inner_table_content_tds' >"+sno+"</td>";
					html += "<td class = 'lib-col_inner_table_content_tds1' >"+department+"</td>";
					html += "<td class = 'lib-col_inner_table_content_tds' ><a class = 'lib_table_as' target = '_blank' href='pdf/Collections/"+file+"'>click here</a></td>";
					html += "<td class = 'lib-col_inner_table_content_tds' >"+count+"</td></tr>";
					sno += 1;
				}
				html += "</table>";
				var ele = document.getElementById("col_table");
				ele.innerHTML = html;
			}
	};
	}
function jou_table(file_name)
{
	var file = file_name;
	var req = new XMLHttpRequest();
	var sno =1 ;
	req.open("POST","Jou_Table" ,true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.send("file_name="+file_name);
	req.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200 )
		{
			var html = "<table class = 'lib-jou_inner_table_borderset'><tr><th class = 'lib-jou_inner_table_th' colspan = 3 >" ;
			if(file_name == "Journals") {
				html += "DEPARTMENT-WISE JOURNAL DETAILS</th></tr>";
			} else if(file_name == "Magazines") {
				html += "DEPARTMENT-WISE MAGAZINES DETAILS</th></tr>";
			}
			html += "<tr class = 'lib-jou_inner_table_content_tr' >";
			html += "<td class = 'lib-jou_inner_table_content_tds_heading1' >DEPARTMENT</td>";
			html += "<td class = 'lib-jou_inner_table_content_tds_heading' >NATIONAL</td>";
			html += "<td class = 'lib-jou_inner_table_content_tds_heading' >INTERNATIONAL</td></tr>";
			var htmlContent = JSON.parse(this.responseText);
			for(var i in htmlContent)
			{
				var department = htmlContent[i].department;
				var natFile = htmlContent[i].nat_fileName;
				var natCount = htmlContent[i].nat_count;
				var inatFile = htmlContent[i].inat_fileName;
				var inatCount = htmlContent[i].inat_count;
				html += "<tr class = 'lib-jou_inner_table_content_tr' >";
				html += "<td class = 'lib-jou_inner_table_content_tds1' >"+department+"</td>";
				if(natCount==0)
					{
					html += "<td class = 'lib-jou_inner_table_content_tds' >--</td>";
					}
				else
					{
					if(file_name == "Journals")
						{
						html += "<td class = 'lib-jou_inner_table_content_tds' ><a class = 'lib_table_as' target = '_blank' href='pdf/Journals/National/"+natFile+"'>"+natCount+"</a></td>";
						}
					else if(file_name == "Magazines")
						{
						html += "<td class = 'lib-jou_inner_table_content_tds' ><a class = 'lib_table_as' target = '_blank' href='pdf/Magazines/National/"+natFile+"'>"+natCount+"</a></td>";
						}
					}
				if(inatCount==0)
					{
					html += "<td class = 'lib-jou_inner_table_content_tds' >--</td>";
					}
				else
					{
					if(file_name == "Journals")
						{
						html += "<td class = 'lib-jou_inner_table_content_tds' ><a class = 'lib_table_as' target = '_blank' href='pdf/Journals/InterNational/"+inatFile+"'>"+inatCount+"</a></td></tr>";
						}
					else if(file_name == "Magazines")
						{
						html += "<td class = 'lib-jou_inner_table_content_tds' ><a class = 'lib_table_as' target = '_blank' href='pdf/Magazines/InterNational/"+inatFile+"'>"+inatCount+"</a></td></tr>";
						}
					}
			}
			html += "</table>";
			var ele = document.getElementById("jou_table");
			ele.innerHTML = html;
		}
};
}
function e_jou()
{
	var sno = 1;
	var html = "<table class = 'lib-jou_inner_table_borderset'><th class = 'lib-ejou_table_th1' >";
	html += "SNO</th><th class = 'lib-ejou_table_th' >Department</th><th class = 'lib-ejou_table_th' >WEB ADDRESS</th><th class = 'lib-ejou_table_th' >Click Here</th>";
	var req = new XMLHttpRequest();
	req.open("POST", "EjouTables", true)
	req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	req.send();
	req.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200 )
		{
		var htmlContent = JSON.parse(this.responseText);
		for(i in htmlContent)
			{
			html += "<tr class = 'lib-ejou_inner_table_tr' ><td class = 'lib-ejou_inner_table_td1' >"+sno+"</td>";
			html += "<td class = 'lib-ejou_inner_table_td' >"+htmlContent[i].department+"</td>";
			html += "<td class = 'lib-ejou_inner_table_td' >"+htmlContent[i].webaddress+"</td>"
			html += "<td class = 'lib-ejou_inner_table_td' ><a target = '_blank' href = http://"+htmlContent[i].webaddress+">click here</a></td></tr>"
			sno += 1;
			}
		html+="</table>";
		document.getElementById("ejou_table").innerHTML = html;
		}
		}
}
function mba(file_name)
{
	var req = new XMLHttpRequest();
	req.open("POST", "Jou_Table", true)
	req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	req.send("file_name="+file_name);
	var sno = 1;
	req.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200 )
	{
		var html = "<table class = 'lib-jou_inner_table_borderset'><th class = 'lib-ejou_table_th1' >";
		html += "SNO</th><th class = 'lib-mba_table_th1' >BOOKS DETAILS</th><th class = 'lib-mba_table_th' >VOLUMES</th><th class = 'lib-mba_table_th' >TITLES</th>";
		var htmlContent = JSON.parse(this.responseText);
		for(i in htmlContent)
			{
			var bookName = htmlContent[i].department;
			var volumes = htmlContent[i].nat_count;
			var titles = htmlContent[i].inat_count;
			html += "<tr class = 'lib-ejou_inner_table_tr' ><td class = 'lib-ejou_inner_table_td1' >"+sno+"</td>";
			html += "<td class = 'lib-mba_table_td1' >"+bookName+"</td>";
			html += "<td class = 'lib-mba_table_td' >"+volumes+"</td>";
			html += "<td class = 'lib-mba_table_td' >"+titles+"</td>";
			sno += 1;
			}
		document.getElementById("mba_table").innerHTML = html;
	}
	};
}
function download_table(file_name)
{
	var req = new XMLHttpRequest();
	req.open("POST", "Dow_table1", true)
	req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	req.send("file_name="+file_name);
	var html;
	req.onreadystatechange =  function(){
		if(this.readyState == 4 && this.status == 200 )
		{
			var sno = 1;
			html = "<table class = 'lib-jou_inner_table_borderset' ><th class = 'lib-dow_table_th' height = 40px; width = 35px; >";
			html += "SNO</th><th class = 'lib-dow_table_th' height = 40px; width = 175px >Staff Name</th><th class = 'lib-dow_table_th' height = 40px; width = 125px >Dept.</th><th class = 'lib-dow_table_th' height = 40px; width = 350px >Paper</th><th class = 'lib-dow_table_th' height = 40px; width = 250px >Name of the Journal</th>";
			var htmlContent = JSON.parse(this.responseText);
			for(i in htmlContent)
				{
				var department = htmlContent[i].department;
				var staff_name = htmlContent[i].staff_name;
				var file_name = htmlContent[i].file_name;
				var journal_name = htmlContent[i].journal_name;
				var paper = htmlContent[i].paper;
				html += "<tr class = 'lib-ejou_inner_table_tr' ><td class = 'lib-dow_table_td' height = 50px; width = 35px; >"+sno+"</td>";
				html += "<td class = 'lib-dow_table_td' height = 50px; width = 175px >"+staff_name+"</td>";
				html += "<td class = 'lib-dow_table_td' height = 50px; width = 125px >"+department+"</td>";
				html += "<td class = 'lib-dow_table_td' height = 50px; width = 350px ><a href = 'pdf/Downloads/Faculty-member/"+file_name+"' target = '_blank'>"+paper+"</a></td>";
				html += "<td class = 'lib-dow_table_td' height = 50px; width = 200px >"+journal_name+"</td></tr>";
				sno = sno+1;
				}
			html += "</table>";
			document.getElementById("download_table1").innerHTML = html;
			download_form();
		}
	};
}
function download_form()
{
	var req = new XMLHttpRequest();
	req.open("POST", "Dow_table2", true)
	req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	req.send();
	var html;
	req.onreadystatechange =  function(){
		if(this.readyState == 4 && this.status == 200 )
		{
			sno = 1;
			var html = "<table class = 'lib-col_inner_table_borderset'>" ;
			html += "<tr class = 'lib-col_inner_table_content_tr' ><td class = 'lib-fre_inner_table_content_tds' >S.NO</td>";
			html += "<td class = 'lib-col_inner_table_content_tds_heading1' >FORMS</td>";
			html += "<td class = 'lib-col_inner_table_content_tds_heading' >STAFF / STUDENT</td>";
			html += "<td class = 'lib-col_inner_table_content_tds_heading' >DOWNLOAD</td></tr>";
			var htmlContent = JSON.parse(this.responseText);
			for(var i in htmlContent)
			{
				var form_name = htmlContent[i].form_name;
				var file_name = htmlContent[i].file_name;
				var sta_stu = htmlContent[i].sta_stu;
				html += "<tr class = 'lib-col_inner_table_content_tr' ><td class = 'lib-fre_inner_table_content_tds' >"+sno+"</td>";
				html += "<td class = 'lib-col_inner_table_content_tds1' >"+form_name+"</td>";
				html += "<td class = 'lib-col_inner_table_content_tds' >"+sta_stu+"</td>";
				html += "<td class = 'lib-col_inner_table_content_tds' ><a class = 'lib_table_as' target = '_blank' href='pdf/Downloads/Forms/"+file_name+"'>click here</a></td></tr>";
				sno += 1;
			}
			html += "</table>";
			var ele = document.getElementById("download_table2");
			ele.innerHTML = html;
		};
		}
	}
function qpaperTable(text)
{
	jsonobj="{";
	var req = new XMLHttpRequest();
	document.getElementById("info tag").style.display="none";
	document.getElementById("search").style.display="block";
	req.open("POST", "QPapers", true)
	req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	req.send();
	var year="";
	var obj = new Date();
	var date=obj.getFullYear();
	var month=obj.getMonth();
	var semester="";
	if(text=="QPapers")
		{
		var department="Department :<select id='department' onchange='insertSem()'><option>No value</option>";
		}
	else
		{
		var department="Department :<select id='department' onchange='insertSemSyll()'><option>No value</option>";
		}
	req.onreadystatechange =  function(){
		if(this.readyState == 4 && this.status == 200 )
		{
			var htmlContent = JSON.parse(this.responseText);
			for(index in htmlContent)
				{
				if( index==(Object.keys( htmlContent).length)-1)
					{
					jsonobj+='"'+htmlContent[index].depart+'":"'+htmlContent[index].degree+'"';
					}
				else
					{
					jsonobj+='"'+htmlContent[index].depart+'":"'+htmlContent[index].degree+'",';
					}
				department+="<option>"+htmlContent[index].depart+"</option>";
				}
			jsonobj+='}';
			department+="</select>";
			semester="Semester :<select id='semester'><option>--</option></select>";
	if(text=="QPapers")
		{
		var base = 2015;
		year="Period :<select id='year' onchange='insertSem()'><option>No value</option><option>November 2014</option>";
		for(i=base;i<=date;i++)
			{
			if(i==date)
				{
				if(month>=5)
					{
					year+="<option>April "+i+"</option>";
					}
				}
			else
				{
				year+="<option>April "+i+"</option>";
				}
			if(i==date)
				{
				if(month==12)
					{
					year+="<option>November "+i+"</option>";
					}
				}
			else
				{
				year+="<option>November "+i+"</option>";
				}
			}
		year+="</select>";
		}
	else
		{
		year="Year :<select id='year' onchange='insertSemSyll()' ><option>No value</option>";
		var base = 2014;
		for(i=base;i<date;i++)
		{
			if(i==date&&month>=8)
				{
				year+="<option>"+i+"</option>";
				}
			else if(i<date)
				{
				year+="<option>"+i+"</option>"
				}
		}
		year+="</select>";
		}
	document.getElementById("lib-QPaper_table_department").innerHTML=department;
	document.getElementById("lib-QPaper_table_year").innerHTML=year;
	document.getElementById("lib-QPaper_table_semester").innerHTML=semester;
		}
	};
}
function checkValid()
{
	var sem=document.getElementById("semester").value;
	var year=document.getElementById("year").value;
	var dept=document.getElementById("department").value;
	if(sem=="--"||dept=="No values"||year=="No values")
		{
			window.alert("invalid details");
		}
	else
		{
		var html;
		var text=document.getElementsByName("select");
		if(text[1].checked==true)
		{
		var pdf='pdf/Syllabus/'+dept+"/"+year+"/"+sem+".pdf";
		html="<object style='height:1000px' width='1000px' data='"+pdf+"'></object>";
		}
		else
		{
		var pdf="pdf/QPapers/"+dept+"/"+year+"/"+sem+".pdf";
		html="<object style='height:1000px' width='1000px' data='"+pdf+"'></object>";
		}
		alert(pdf);
		var req=new XMLHttpRequest();
		req.open("POST",pdf, true)
		req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		req.send();
		req.onreadystatechange =  function(){
			if(this.readyState == 4 && this.status == 404 )
			{
				document.getElementById("pdfContent").innerHTML="<h4>PDF Not found!</h4>";
			}
			if(this.readyState == 4 && this.status == 200 )
				{
				document.getElementById("pdfContent").innerHTML=html;	
				}
		};
		}
	}
function insertSem()
{
	var ele=document.getElementById("year").value;
	var depart=document.getElementById("department").value;
	var semester="";
	var obj=JSON.parse(jsonobj);
		if(ele[0]=="N")
			{
			if(obj[depart]=="B.E")
				{
				semester="<option>--</option><option>I</option><option>III</option>";
				semester+="<option>V</option><option>VII</option>";
				}
			else
				{
				semester="<option>--</option><option>I</option><option>III</option>";
				}
			}
		else
			{
			if(obj[depart]=="B.E")
				{
				semester="<select id='semester'><option>--</option><option>II</option><option>IV</option>";
				semester+="<option>VI</option></select>";
				}
			else
				{
				semester="<select id='semester'><option>--</option><option>II</option><option>IV</option>";
				}
			}
		document.getElementById("semester").innerHTML=semester;
	}
function insertSemSyll()
{
	var ele=document.getElementById("year").value;
	var depart=document.getElementById("department").value;
	var semester="";
	var obj=JSON.parse(jsonobj);
	if(obj[depart]=="B.E")
	{
		semester="<option>--</option><option>I,II</option><option>III,IV</option>";
		semester+="<option>V,VI</option><option>VII,VII</option>";
	}
	else
	{
		semester="<option>--</option><option>I,II</option><option>III,IV</option>";
	}
	document.getElementById("semester").innerHTML=semester;
}