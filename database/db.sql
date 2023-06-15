DROP DATABASE IF EXISTS database_pelis;
CREATE DATABASE database_pelis CHARSET utf8mb4;

USE database_pelis;

CREATE TABLE users(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(60) NOT NULL
);




CREATE TABLE pelis(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    description TEXT,
    user_id INT UNSIGNED,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
);