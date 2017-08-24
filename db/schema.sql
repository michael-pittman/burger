DROP DATABASE IF EXISTS burger_db;
CREATE database burger_db;

USE burger_db;

CREATE TABLE burgers (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(256) NOT NULL,
  devoured BOOLEAN DEFAULT FALSE,
  date TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
)