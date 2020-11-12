DROP DATABASE IF EXISTS theFrenchVapoteur;
CREATE DATABASE IF NOT EXISTS theFrenchVapoteur;
USE theFrenchVapoteur;

CREATE USER IF NOT EXISTS 'tomwillemin'@'%' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON theFrenchVapoteur . * TO 'root'@'%';

----------------------Table Projects----------------------
CREATE TABLE projects (
        id_project SMALLINT NOT NULL AUTO_INCREMENT,
        title_project VARCHAR(255) NOT NULL,
        picture_project MEDIUMBLOB,
        resume_project VARCHAR(255) NOT NULL,
        PRIMARY KEY (id_project)
)
Engine = INNODB;
