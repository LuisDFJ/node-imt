-- Commands to create the database in MYSQL SHELL
-- CONNECT TO MYSQL
-- \c --mc root@localhost
-- ENTER MYSQL PASSWORD

--      CREATE A NEW DATABASE  @localhost NAME: database_node_imt    ---
CREATE DATABASE database_node_imt;
--      USING DATABASE database_node_imt     --
USE database_node_imt;
--      CREATE USERS TABLE NAME: users       --
CREATE TABLE users (
    id SERIAL,
    username VARCHAR(32) NOT NULL,
    password VARCHAR(60) NOT NULL,
    firstName VARCHAR(128) NOT NULL,
    lastName VARCHAR(128) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
--      TO VISUALIZE THE TABLE JUST CREATED     --
DESCRIBE users;
--      TO CHANGE NATIVE PASSWORD IN MYSQL      --
ALTER USER 'root'@'localhost' 
IDENTIFIED WITH mysql_native_password
BY 'newPassword';

flush privileges;