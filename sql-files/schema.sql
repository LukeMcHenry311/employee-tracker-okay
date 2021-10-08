DROP DATABASE IF EXISTS tracker;
CREATE DATABASE tracker;
USE tracker; 

CREATE TABLE department(
    id INT NOT NULL auto_increment PRIMARY KEY,
    name VARCHAR(30)

);

create table role(
    id INT NOT NULL auto_increment PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT, 
    foreign key(department_id) references department(id)
);

create table employee(
    id INT NOT NULL auto_increment PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    foreign key(role_id) references ROLE(id),
    manager_id INT,
    foreign key(manager_id) references employee(id)
)