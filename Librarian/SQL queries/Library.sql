library:

Feedback

	create table feedbackform(id int not null auto_increment, name varchar(256) not null, emailId varchar(256) not null, mobNo varchar(20) not null, rollNo varchar(10) not null, feedback longblob not null, primary key(id));

	insert into feedbackform (name, emailId, mobNo, rollNo, feedback) values ('"+name+"','"+emailId+"','"+mobNo+"','"+rollNo+"','"+feedback+"');


ADMIN Login
	
	create table adminlogin(username varchar(256) not null, password varchar(256) not null);

	insert into adminlogin values ("admin", "admin");

pdf:		

Departments

	create table bedepartments(id int not null auto_increment, name varchar(256) not null, primary key(id, name));

	insert into bedepartments (name) values ("MECHANICAL ENGINEERING"), ("ELECTRICAL & ELECTRONICS ENGINEERING"), ("ELECTRONICS & COMMUNICATION ENGINEERING"), ("COMPUTER SCIENCE & ENGINEERING"), ("INFORMATION TECHNOLOGY"), ("CIVIL ENGINEERING"), ("ELECTRONICS & INSTRUMENTATION ENGINEERING"), ("AUTOMOBILE ENGINEERING"), ("ELECTRONICS & TELECOMMUNICATION ENGINEERING");

	create table medepartments(id int not null auto_increment, name varchar(256) not null, primary key(id, name));

	insert into medepartments (name) values ("MECHATRONICS (M.E)"), ("COMMUNICATION SYSTEM (M.E)"), ("V.L.S.I (M.E)");

