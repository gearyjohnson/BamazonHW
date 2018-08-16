DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB; 

USE bamazonDB; 

CREATE TABLE item ( 
    id INT NOT NULL AUTO_INCREMENT, 
    product VARCHAR (255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    quantity INT NOT NULL, 
    PRIMARY KEY (id)
); 

INSERT INTO item (product, price, quantity)
VALUES ("Rayban sunglasses",150.00,10); 

INSERT INTO item (product, price, quantity)
VALUES ("Kindle Fire",59.99,10);

INSERT INTO item (product, price, quantity)
VALUES ("Sony 65inch LED",799.00,10);

INSERT INTO item (product, price, quantity)
VALUES ("Fitbit",99.95,100);

INSERT INTO item (product, price, quantity)
VALUES ("Slim wallet",7.99,100);

INSERT INTO item (product, price, quantity)
VALUES ("Cube Smart power strip",19.54,150);

INSERT INTO item (product, price, quantity)
VALUES ("Jukebox bluetooth speaker",29.00,10);

INSERT INTO item (product, price, quantity)
VALUES ("Powercore 13000",28.59,50);

INSERT INTO item (product, price, quantity)
VALUES ("Uber dual dash camera",135.99,100);

INSERT INTO item (product, price, quantity)
VALUES ("Tronics wireless headphones",64.99,100);