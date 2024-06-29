CREATE DATABASE seasalon;
USE seasalon;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    password TEXT NOT NULL,
    role ENUM("customer","admin") NOT NULL
);

CREATE TABLE service(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    session_duration INT NOT NULL
);

CREATE TABLE review(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    star INT NOT NULL
);

CREATE TABLE reservation(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    service VARCHAR(50) NOT NULL,
    date_when VARCHAR(50) NOT NULL,
    session_time VARCHAR(50) NOT NULL
);

CREATE TABLE branch(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location TEXT NOT NULL,
    open_time VARCHAR(50) NOT NULL,
    close_time VARCHAR(50) NOT NULL
);

INSERT INTO users(name,email,phone_number,password, role) VALUES
("Thomas N","thomas.n@compfest.id","08123456789","$2b$10$XnINyy88FxyqzzkFa.fhWurqIhzjNvBLPyfJewM80mG18WMPwni2K","admin"),
("Sebastian","Sebastian@yahoo.com","08123456789","$2b$10$SR7OD/xgBU9nIz.QXcDmH./V8KWbgj28P1xlcmx.MSxOJ45OXVNJ6","customer");

INSERT INTO service(name, session_duration) VALUES
("Haircuts and Styling",1),
("Manicure and Pedicure",1),
("Facial Treatments",1);

INSERT INTO review(name,review,star) VALUES
("Abel","he Sea Spa provides every beauty need from complete 
hair color and cuts, LCN manicures, spa pedicures, facials, 
and Fantasy Tan Sunless Tanning to a relaxing massage. They 
specialize in Brides and Bridal Party Packages too!",5),
("Mella","everything well-organized and clean at her salon. 
She was compassionate and understood my skin concerns and 
breakout issues. I highly recommend SEA Salon",4);

INSERT INTO branch(name, location, open_time,close_time) VALUES
("andrean johnny","Jl. Tanjung Duren Selatan IV No.8 5, RT.5/RW.2 11470 Daerah Khusus Ibukota Jakarta",
"09:00","21:00"
);

INSERT INTO reservation(name,phone_number,service,date_when,session_time) VALUES
("Marin","09123456789","Facial Treatments","2024-06-25","15.00 - 16.00");