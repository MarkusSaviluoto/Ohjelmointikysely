CREATE DATABASE programmer_query;

USE programmer_query;

CREATE TABLE programmer_data (
    id int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    age tinyint unsigned NOT NULL,
    gender tinyint NOT NULL,
    experience_years tinyint NOT NULL,
    programming tinyint NOT NULL,
    web_frontend tinyint NOT NULL,
    web_backend tinyint NOT NULL,
    mobile_native tinyint NOT NULL,
    mobile_hybrid tinyint NOT NULL,
    relational_database tinyint NOT NULL,
    nosql_database tinyint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;