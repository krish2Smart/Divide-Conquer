create database pdf;
use pdf;
create table home_content(content longblob);
create table col_cd(degree varchar(60), department varchar(60),file_name varchar(30),cd_count int);
insert into col_cd values('B.E','AUTOMOBILE ENGINEERING','AUTOCD.pdf',12);
insert into col_cd values('B.E','CIVIL ENGINEERING','CIVILCD.pdf',80);
insert into col_cd values('B.E','COMPUTER SCIENCE ENGINEERING','CSECD.pdf',725);
insert into col_cd values('B.E','INFORMATION TECHNOLOGY','ITCD.pdf',389);
insert into col_cd values('B.E','ELECTRONICS & COMMUNICATION ENGINEERING','ECECD.pdf',180);
insert into col_cd values('B.E','ELECTRICAL & ELECTRONICS ENGINEERING','EEECD.pdf',154);
insert into col_cd values('B.E','ELECTRONICS & INSTRUMENTATION ENGINEERING','EIECD.pdf',33);
insert into col_cd values('B.E','ELECTRONICS & TELECOMMUNICATION ENGINEERING','ETECD.pdf',87);
insert into col_cd values('B.E','MECHANICAL ENGINEERING','MECHCD.pdf',242);
insert into col_cd values('SCIENCE & HUMANITIES','SCIENCE & HUMANITIES','S&HCD.pdf',98);
insert into col_cd values('GENERAL','GENERAL','GENERALCD.pdf',354);
insert into col_cd values('MBA','MBA','MBACD.pdf',445);
insert into col_cd values('MCA','MCA','MCACD.pdf',650);
create table jou_table(degree varchar(60), department varchar(60),nat_file_name varchar(60),nat_count int,inat_file_name varchar(60),inat_count int);
insert into jou_table values('B.E','MECHANICAL ENGINEERING','Mech National List 11.08.2016.pdf',20,'MECHANICAL ENGINEERING INT JRLS.pdf',07);
insert into jou_table values('B.E','ELECTRICAL & ELECTRONICS ENGINEERING','EEE NATIONAL JRLS (1).pdf',07,'ELECTRICAL INT JRLS.pdf',11);
insert into jou_table values('B.E','ELECTRONICS & COMMUNICATION ENGINEERING','ECE NATIONAL JRLS (1)-2.pdf',09,'ELECTRONICS INT JRLS.pdf',13);
insert into jou_table values('B.E','COMPUTER SCIENCE & ENGINEERING','CSE NATIONAL JRLS.pdf',17,'COMPUTER SCIENCE INT JRLS.pdf',14);
insert into jou_table values('B.E','INFORMATION TECHNOLOGY','ITNATIONAL JRLS.pdf',13,'INFORMATION TECHNOLOGY INT JRLS.pdf',15);
insert into jou_table values('B.E','CIVIL ENGINEERING','CIVIL NATIONAL JRLS (2).pdf',19,'CIVIL  ENGINEERING INT JRLS.pdf',07);
insert into jou_table values('B.E','ELECTRONICS & INSTRUMENTATION ENGINEERING','EIENATIONAL JRLS.pdf',07,'ELECTRONICS INT JRLS.pdf',11);
insert into jou_table values('B.E','AUTOMOBILE ENGINEERING','AUTOMOBILENATIONAL JRLS.pdf',08,'AUTOMOBILE  ENGINEERING INT JRLS.pdf',06);
insert into jou_table values('B.E','ELECTRONICS & TELECOMMUNICATION ENGINEERING','ETE NATIONAL JRLS.pdf',07,'ELECTRONICS TELE INT JRLS.pdf',07);
insert into jou_table values('M.E','MECHATRONICS (M.E)','M E MECHAT NATIONAL JRLS.pdf',05,'ME  MECHATRONICS INT JRLS.pdf',05);
insert into jou_table values('M.E','COMMUNICATION SYSTEM (M.E)','M E COMM. SYS NATIONAL JRLS.pdf',05,'ME  COMMUNICATION SYSTEMS INT JRLS.pdf',05);
insert into jou_table values('M.E','V.L.S.I (M.E)','M E VLSI NATIONAL JRLS.pdf',05,'ME  VLSI INT JRLS.pdf',05);
insert into jou_table values('SCIENCE & HUMANITIES','SCIENCE & HUMANITIES','S H NATIONAL JRLS.pdf',41,'SCIENCE HUM INT JRLS.pdf',06);
insert into jou_table values('GENERAL','GENERAL','GENERAL JRLS.pdf',12,'',0);
insert into jou_table values('TOTAL','TOTAL','C LIB TOTAL JRLS.pdf',175,'CENTRAL LIBRARY TOT I JRLS.pdf',112);
insert into jou_table values('MBA','MBA','MBA National jrls.pdf',53,'MBA INT JRLS.pdf',30);
insert into jou_table values('MCA','MCA','MCA National Journal List 22.08.2016 (3).pdf',26,'MCA INT JRLS.pdf',30);
insert into jou_table values('Overall TOTAL','Overall TOTAL','ALL LIBRARY NATI JRLS.pdf',254,'ALL LIB INTERNATIONAL JOURNALS.pdf',172);
create table mag_table(degree varchar(60), department varchar(60),nat_file_name varchar(60),nat_count int,inat_file_name varchar(60),inat_count int);
insert into mag_table values('B.E','MECHANICAL ENGINEERING','MECH NATIONAL MAGAZINES.pdf',17,'',0);
insert into mag_table values('B.E','ELECTRICAL & ELECTRONICS ENGINEERING','EEE NATIONAL MAGAZINES.pdf',08,'INTERNATIONAL MAGAZINES EEE.pdf',03);
insert into mag_table values('B.E','ELECTRONICS & COMMUNICATION ENGINEERING','ECE NATIONAL MAGAZINES.pdf',04,'INTERNATIONAL MAGAZINES ECE.pdf',05);
insert into mag_table values('B.E','COMPUTER SCIENCE & ENGINEERING','CSE NATIONAL MAGAZINES.pdf',05,'INTERNATIONAL MAGAZINES CSE.pdf',05);
insert into mag_table values('B.E','INFORMATION TECHNOLOGY','IT NATIONAL MAGAZINES.pdf',05,'INTERNATIONAL MAGAZINES IT.pdf',02);
insert into mag_table values('B.E','CIVIL ENGINEERING','CIVIL NATIONAL MAGAZINES.pdf',19,'INTERNATIONAL MAGAZINES CIVIL-2.pdf',01);
insert into mag_table values('B.E','ELECTRONICS & INSTRUMENTATION ENGINEERING','EIE NATIONAL MAGAZINES.pdf',05,'',0);
insert into mag_table values('B.E','AUTOMOBILE ENGINEERING','AUTO NATIONAL MAGAZINES.pdf',15,'INTERNATIONAL MAGAZINES AUTO.pdf',01);
insert into mag_table values('B.E','ELECTRONICS & TELECOMMUNICATION ENGINEERING','ETE NATIONAL MAGAZINES.pdf',04,'',0);
insert into mag_table values('SCIENCE & HUMANITIES','SCIENCE & HUMANITIES','S AND HUMA NATIONAL MAGAZINES.pdf',05,'INTERNATIONAL MAGAZINES S AND H.pdf',02);
insert into mag_table values('GENERAL','GENERAL','GENERAL NATIONAL MAGAZINES-2.pdf',59,'INTERNATIONAL MAGAZINE GENE (1).pdf',01);
insert into mag_table values('TOTAL','TOTAL','CEN LIB TOT MAG.pdf',146,'INTERNATIONAL MAGAZINE GENE (1).pdf',20);
insert into mag_table values('MBA','MBA','MBA  NATIONAL  MAGAZINES .pdf',30,'INTERNATIONAL MAGAZINES MBA.pdf',03);
insert into mag_table values('MCA','MCA','MCA NATIONAL MAGAZINES.pdf',19,'',0);
insert into mag_table values('Overall TOTAL','Overall TOTAL','G TOTAL MAGAZINES.pdf',195,'ALL LIBRARY I N MAGA.pdf',23);
create table mba_table(book_name varchar(60),volumes int,titles int);
insert into mba_table values('MANAGEMENT',2251,643);
insert into mba_table values('MARKETING MANAGEMENT & MARKETING RESEARCH',1905,471);
insert into mba_table values('ORGANIZATIONAL BEHAVIOUR',2064,430);
insert into mba_table values('ECONOMICS',803,343);
insert into mba_table values('MANAGEMENT ACCOUNTING & LAW',991,267);
insert into mba_table values('MANAGEMENT INFORMATION SYSTEM & COMPUTER SCIENCE',975,311);
insert into mba_table values('ADVERTISING MANAGEMENT',142,56);
insert into mba_table values('BUSINESS COMMUNICATION',567,144);
insert into mba_table values('STRATEGIC MANAGEMENT & STATISTICS',557,175);
insert into mba_table values('FINANCE & FINANCIAL MANAGEMENT',1163,235);
insert into mba_table values('PRODUCTION MANAGEMENT',714,183);
insert into mba_table values('GENERAL',202,12333);
insert into mba_table values('TOTAL',79,3337);
create table mca_table(book_name varchar(60),volumes int,titles int);
insert into mca_table values('COMPUTER SCIENCE',8690,1960);
insert into mca_table values('MATHEMATICS',433,180);
insert into mca_table values('MANAGEMENT',296,167);
insert into mca_table values('ELECTRONICS',97,52);
insert into mca_table values('GENERAL',270,178);
insert into mca_table values('TOTAL',9786,2537);
create table downloads(id int not null auto_increment, staff_name varchar(130),department varchar(50),paper varchar(256),journal_name varchar(120),file_name varchar(200), primary key(id));
insert into downloads (staff_name, department, paper, journal_name, file_name) values('B.Subramanian','Library','Information Seeking Behaviour of Faculty Members of Karpagam University in Coimbatore, India','Library Progress','Final-13-P-135-143-INFORMATION SEEKING BEHAVIOUR OF FACULTY MEMBERS OF KARPAGAM UNIVERSITY IN COIMBATORE, INDI-1.pdf');
insert into downloads (staff_name, department, paper, journal_name, file_name) values('B.Subramanian','Library','Information needs and Information seeking behaviour of Students in Karpagam University: A Survey','Library Progress','PDF-5-P-181-187-INFORMATION NEEDS AND INFORMATION SEEKING BEHAVIOUR OF STUDENTS IN KARPAGAM UNIVERSITY A SURVEY.pdf');
insert into downloads (staff_name, department, paper, journal_name, file_name) values('B.Subramanian','Library','A Bibliometric Study of Publications by Annals of Library Information Studies 1997 - 2011','International Journal of Librarianship and Administration','IJLA-paper 2.pdf');
insert into downloads (staff_name, department, paper, journal_name, file_name) values('B.Subramanian','Library','Information Seeking Behaviour and Library use pattern of biotechnology researchers in the Bharathidasan University in Tamilnadu','Global Research Analysis','file.pdf');
insert into downloads (staff_name, department, paper, journal_name, file_name) values('B.Subramanian','Library','Research Scholar''s Information Seeking Behaviour in Bharathidasan University, Thiruchirappalli, India - A Study ','International Journal of Research in Social Sciences (e-journal)','IJMRA-9914-1.pdf');
create table downloads_form(form_name varchar(256),sta_stu varchar(25),file_name varchar(256));
insert into downloads_form values('STAFF MEMBERSHIP FORM (KCE/LIB/01)','STAFF','KCE-LIB-MEM-STAF.pdf');
insert into downloads_form values('STUDENTS MEMBERSHIP FORM (KCE/LIB/02)','STUDENTS','KCE-LIB-MEM-STUD.pdf');
insert into downloads_form values('BOOK REQUISITION FORM (KCE/LIB/03)','STAFF','KCE-BOOK REQU-STAF.pdf');
insert into downloads_form values('BOOK REQUISITION FORM (KCE/LIB/04)','STUDENTS','KCE-BOOK REQU-STUD.pdf');
insert into downloads_form values('PERIODICAL REQUISITION FORM (KCE/LIB/05)','STAFF','KCE-PERIO-REQ.pdf');
insert into downloads_form values('PERIODICAL REQUISITION FORM (KCE/LIB/06)','STUDENTS','KCE-PERIO-REQ-STUDENT.pdf');
insert into downloads_form values('FEEDBACK FORM (KCE/LIB/07)','STAFF','KCE-LIB-FEED-FACULTY.pdf');
insert into downloads_form values('FEEDBACK FORM (KCE/LIB/08)','STUDENTS','KCE-LIB-FEED-STUDENT.pdf');
insert into downloads_form values('DELNET - REQUISITION FORM (KCE/LIB/09)','STAFF/STUDENTS','delnet form.pdf');
insert into downloads_form values('RULES & REGULATIONS','STUDENTS','LIb Rules.pdf');
insert into downloads_form values('CD WRITING FORM (KCE/LIB/10)','STAFF','KCE DLIB STAFF .pdf');
insert into downloads_form values('CD WRITING FORM (KCE/LIB/11)','STUDENTS','KCE DLIB STUDENT.pdf');
create table convert_pdf(file_name varchar(200),file longblob); 
create table qpapers(department varchar(100), degree varchar(10));
insert into QPapers values('AUTOMOBILE ENGINEERING','B.E');
insert into QPapers values('CIVIL ENGINEERING','B.E');
insert into QPapers values('COMPUTER SCIENCE ENGINEERING','B.E');
insert into QPapers values('ELECTRICAL & ELECTRONICS ENGINEERING','B.E');
insert into QPapers values('ELECTRONICS & COMMUNICATION ENGINEERING','B.E');
insert into QPapers values('ELECTRONICS & INSTRUMENTATION ENGINEERING','B.E');
insert into QPapers values('ELECTRONICS & TELECOMMUNICATION ENGINEERING','B.E');
insert into QPapers values('INFORMATION TECHNOLOGY','B.E');
insert into QPapers values('MECHANICAL ENGINEERING','B.E');
insert into QPapers values('M.B.A (Master of Business Administration)','Master');
insert into QPapers values('M.C.A (Master of Computer Application)','Master');
insert into QPapers values('M.E (COMMUNICATION SYSTEM)','M.E');
insert into QPapers values('M.E (MECHATRONICS)','M.E');
insert into QPapers values('M.E (VLSI)','M.E');
create table ejournals(department varchar(256), webaddress varchar(256));	
create table free_e_books(link varchar(256));
create table free_e_journals(link varchar(256));
create table free_newspapers(link varchar(256));

create table bedepartments(id int not null auto_increment, name varchar(256) not null, primary key(id, name));

insert into bedepartments (name) values ("MECHANICAL ENGINEERING"), ("ELECTRICAL & ELECTRONICS ENGINEERING"), ("ELECTRONICS & COMMUNICATION ENGINEERING"), ("COMPUTER SCIENCE & ENGINEERING"), ("INFORMATION TECHNOLOGY"), ("CIVIL ENGINEERING"), ("ELECTRONICS & INSTRUMENTATION ENGINEERING"), ("AUTOMOBILE ENGINEERING"), ("ELECTRONICS & TELECOMMUNICATION ENGINEERING");

create table medepartments(id int not null auto_increment, name varchar(256) not null, primary key(id, name));

insert into medepartments (name) values ("MECHATRONICS (M.E)"), ("COMMUNICATION SYSTEM (M.E)"), ("V.L.S.I (M.E)");







	The three storied, computerized library is well-stacked with 71,894 volumes, 426 National and International journals, 220 National and International magazines, 3501 CD-Rom's 8798 Back volumes and 4133 project reports. Digital Library with 20 PCs and 500 plus e-journals, 115 NPTEL video courses are part of the resources. KCE is an institutional member of the DELNET, New Delhi. The library subscribes publications of reputed international societies such as ASME and IEEE.