create database customerdb;
use customerdb;
create table customers (
id int auto_increment,
firstname varchar(255),
lastname varchar(255),
primary key(id)
);
insert into customers (id,firstname,lastname)
values(id,'aleksander','po');
show tables;
drop table customers;
SELECT * FROM customerdb.customers;