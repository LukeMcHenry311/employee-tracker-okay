USE tracker; 

INSERT INTO department(name) VALUES ("Sales"),("Engineering"),("Finance"), ("Legal");

INSERT INTO role(title,salary,department_id) 
VALUES	("Sales Manager", 80000, 1),
		("Salesman", 60000, 1),
		("Database Admin", 370000, 2),
		("Web Developer", 75000, 2),
		("Financial Advisor", 300000, 3),
		("Financial Analyst", 220000, 4),
		("HR Manager", 235000, 4),
		("Lawyer", 250000, 2);

INSERT INTO employee(first_name,last_name,role_id) 
VALUES ("Kang","Sae-byeok",1),
		("Seong", "Gi-hun", 2),
		("Cho", "Sang-Woo", 3),
		("Ji", "Yeong", 4),
		("HoYeon", "Jung", 5),
		("Joon", "Ho", 6),
		("Jang", "Deok-su", 7),
		("Lee", "Jung-jae", 8);