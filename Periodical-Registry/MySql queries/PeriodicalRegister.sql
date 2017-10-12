create database periodical_register;

	use periodical_register;

	create table departments(id int not null auto_increment, name varchar(256) not null, primary key(id, name));

		insert into departments (name) values ("MECHANICAL ENGINEERING"), ("ELECTRICAL & ELECTRONICS ENGINEERING"), ("ELECTRONICS & COMMUNICATION ENGINEERING"), ("COMPUTER SCIENCE & ENGINEERING"), ("INFORMATION TECHNOLOGY"), ("CIVIL ENGINEERING"), ("ELECTRONICS & INSTRUMENTATION ENGINEERING"), ("AUTOMOBILE ENGINEERING"), ("ELECTRONICS & TELECOMMUNICATION ENGINEERING");

	create table register_login(username varchar(256) not null, password varchar(256) not null);

		insert into register_login values("admin", "admin");	

	create table register_details(id int auto_increment, publisher_name varchar(256), periodical_name varchar(256), periodical_type varchar(256), periodicity varchar(256), period_from date, period_to date, journal_type varchar(256), department varchar(256), publishers_address text, supplying_agent_address text, ddorcheque_no varchar(256), ddorcheque_amount varchar(256), ddorcheque_date date, placement_no varchar(256), subscription_no varchar(256), email_id varchar(256), primary key (id));

	/*create table register_entry_1(id int, volume_no int, issue_no int, publication_date varchar(256), date_of_receipt date);*/