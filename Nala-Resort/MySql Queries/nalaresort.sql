create table room_details(room_no int, floor_no int, room_type varchar(256), price float);

	insert into room_details values(101, 1, "Standard", 1000);
	insert into room_details values(102, 1, "Delux", 2000);
	insert into room_details values(103, 1, "Ultra Delux", 2500);
	insert into room_details values(104, 1, "Standard", 1000);
	insert into room_details values(105, 1, "Delux", 2000);
	insert into room_details values(201, 2, "Standard", 1000);
	insert into room_details values(202, 2, "Delux", 2000);
	insert into room_details values(203, 2, "Standard", 1000);
	insert into room_details values(204, 2, "Ultra Delux", 2500);
	insert into room_details values(205, 2, "Ultra Delux", 2500);
	insert into room_details values(301, 3, "Delux", 2000);
	insert into room_details values(302, 3, "Standard", 1000);
	insert into room_details values(303, 3, "Standard", 1000);
	insert into room_details values(304, 3, "Delux", 2000);
	insert into room_details values(305, 3, "Ultra Delux", 2500);
	insert into room_details values(401, 4, "Ultra Delux", 2500);
	insert into room_details values(402, 4, "Delux", 2000);
	insert into room_details values(403, 4, "Standard", 1000);
	insert into room_details values(404, 4, "Ultra Delux", 2500);
	insert into room_details values(405, 4, "Standard", 1000);

create table occupancy_details(id int auto_increment, person_name varchar(256), aadhar_no varchar(25), check_in date, check_out date, phone_no varchar(15), mail_id varchar(256), room_no int, dry_cleaning tinyint(1), laundry_facilities tinyint(1), free_newspapers tinyint(1), amount_paid float, price float, reference_id varchar(256), booked_at timestamp, primary key(id));

create table cab_details(id int auto_increment, cab_no varchar(15), driver_contact_no varchar(15), booked_person varchar(256), occupancy_details_id int, primary key(id));

create table otp_datas(reference_id varchar(256), otp varchar(256), created_at datetime);

create table management_login(username varchar(50), password varchar(50));

	insert into management_login values('nala', 'nala');

SET GLOBAL event_scheduler = ON;

CREATE EVENT `booking_cleaner_event` ON SCHEDULE EVERY 24 HOUR STARTS '2017-10-10 00:00:00' COMMENT 'Clean up bookings at 00:00 daily!' DO DELETE FROM occupancy_details where curdate() > check_out;

create event `otp_cleaner_event` on schedule every 1 minute comment 'Clean up OTP after 5 minutes of its creation' do delete from otp_datas where now() > created_at + interval 5 minute; 

insert into occupancy_details(person_name, aadhar_no, check_in, check_out, phone_no, mail_id, room_no, dry_cleaning, laundry_facilities, free_newspapers, amount_paid, price, reference_id, booked_at) values('ragul', '123456789123', '2017-10-06', '2017-10-07', '7373413841', 'krishragul143@gmail.com', 204, 0, 0, 0, 2000, 8000, 'Nala@FGvf12165', now());

