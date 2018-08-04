--database scheme
DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT(45) NULL,
  PRIMARY KEY (item_id)
  
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("saucepan", "kitchen",  7.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("wok", "kitchen",  8.50, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bathmat", "bath",  5.50, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("handbag", "miscellaneous",  39.50, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("batteries", "miscellaneous",  4.00, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("fan", "bedroom",  14.00, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pillow", "bedroom",  19.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sheets", "bedroom",  49.50, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("stock pot", "kitchen",  15.50, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("kleenex", "miscellaneous",  1.50, 100);

SELECT * FROM bamazon.products;