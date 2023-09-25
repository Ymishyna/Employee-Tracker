-- DEPARTMENT
INSERT INTO department (department_name)
VALUES 
(Legal),
(Finance),
(HR),
(Marketing),
(Sales),
(Engineering);


-- ROLE
INSERT INTO role (title, salary, department_id)
VALUES 
(Legal Team Lead, 25000, 3),
(Lawyer, 20000, 5),
(Accountant, 7000, 6),
(HR Manager, 10000, 1),
(Recruiter, 3000, 3),
(Marketer, 5000, 2),
(VP Sales, 10000, 4),
(Salesperson, 5000, 6),
(Software Engineer, 13000, 1),
(Engineer, 11000, 5);

-- EMPLOYEE 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Anna', 'Thompson', 1, null),
('Sonia', 'Rodriguez', 2, null),
('Mark', 'Pollo', 3, 2),
('John', 'Carlson', 4, 1),
('Lola', 'Windle', 5, null),
('Tom', 'Sawyer', 6, 1),
('Alex', 'Smith', 7, 2);