library:

Feedback

	create table feedbackform(id int not null auto_increment, name varchar(256) not null, emailId varchar(256) not null, mobNo varchar(20) not null, rollNo varchar(10) not null, feedback longblob not null, primary key(id));

	insert into feedbackform (name, emailId, mobNo, rollNo, feedback) values ('"+name+"','"+emailId+"','"+mobNo+"','"+rollNo+"','"+feedback+"');


ADMIN Login
	
	create table adminlogin(username varchar(256) not null, password varchar(256) not null);

	insert into adminlogin values ("admin", "admin");


	


