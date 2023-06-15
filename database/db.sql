DROP DATABASE IF EXISTS database_pelis;
CREATE DATABASE database_pelis CHARSET utf8mb4;

USE database_pelis;




CREATE TABLE pelis(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    description TEXT,
    favorito boolean default 0
);