create database guest;
use guest;

drop table if exists contacts;
create table contacts(
	id int(5) auto_increment primary key,
    fname varchar(255),
    lname varchar(255), 
    jtitle varchar(255),
    company varchar(255),
    url varchar(255),
    email varchar(255),
    message varchar(255),
    timestamp datetime default now()
);

insert into contacts (fname, lname, jtitle, company, url, email, message)
values ('Jane', 'Doe', 'lifeguard', 'Pool', 'www.pool.gov', 'jdoe@gmail.com', 'hello world');