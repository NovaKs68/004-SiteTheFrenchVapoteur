DROP DATABASE IF EXISTS thefrenchvapoteur;
CREATE DATABASE IF NOT EXISTS thefrenchvapoteur;
USE thefrenchvapoteur;

CREATE USER IF NOT EXISTS 'rootSQL'@'%' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON thefrenchvapoteur . * TO 'rootSQL'@'%';


----------------------Table users_roles----------------------
CREATE TABLE users_roles (
        id_role SMALLINT NOT NULL AUTO_INCREMENT,
        name_role VARCHAR(255) NOT NULL,
        permission SMALLINT NOT NULL,
        PRIMARY KEY (id_role)
)
Engine = INNODB;

----------------------Table users----------------------
CREATE TABLE users (
        id_user SMALLINT NOT NULL AUTO_INCREMENT,
        forename VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        pseudo VARCHAR(255) NOT NULL,
        mail VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        date_creation DATE NOT NULL,
        id_role SMALLINT NOT NULL,
        PRIMARY KEY (id_user),
        UNIQUE KEY mail (mail),
        CONSTRAINT fk_user_id_users
            FOREIGN KEY (id_role)
            REFERENCES users_roles(id_role)
            ON DELETE CASCADE
)
Engine = INNODB;

----------------------Table articles----------------------
CREATE TABLE articles (
        id_article SMALLINT NOT NULL AUTO_INCREMENT,
        title_main VARCHAR(255) NOT NULL,
        resume VARCHAR(255) NOT NULL,
        date_creation DATE NOT NULL,
        date_modification DATE,
        PRIMARY KEY (id_article)
)
Engine = INNODB;

----------------------Table articles_paragraphes----------------------
CREATE TABLE articles_paragraphes (
        id_paragraphe SMALLINT NOT NULL AUTO_INCREMENT,
        id_article SMALLINT NOT NULL,
        paragraphe TEXT NOT NULL,
        PRIMARY KEY (id_paragraphe),
        CONSTRAINT fk_id_paragraphes_id_article
            FOREIGN KEY (id_article)
            REFERENCES articles(id_article)
)
Engine = INNODB;

----------------------Table articles_titles----------------------
CREATE TABLE articles_titles (
        id_title SMALLINT NOT NULL AUTO_INCREMENT,
        id_article SMALLINT NOT NULL,
        title VARCHAR(255) NOT NULL,
        PRIMARY KEY (id_title),
        CONSTRAINT fk_article_id_article
            FOREIGN KEY (id_article)
            REFERENCES articles(id_article)
)
Engine = INNODB;

----------------------Table articles_plan----------------------

----------------------Table tags----------------------
CREATE TABLE tags (
        id_tag SMALLINT NOT NULL AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL,
        color VARCHAR(50) NOT NULL,
        PRIMARY KEY (id_tag)

)
Engine = INNODB;

----------------------Table articles_tags----------------------
CREATE TABLE articles_tags (
        id_tag SMALLINT NOT NULL,
        id_article SMALLINT NOT NULL,
        PRIMARY KEY (id_article, id_tag),
            CONSTRAINT fk_article_tags_articles
                FOREIGN KEY (id_article)
                REFERENCES articles(id_article),
            CONSTRAINT fk_article_tags_tags
                FOREIGN KEY (id_tag)
                REFERENCES tags(id_tag)
                ON DELETE CASCADE
)
Engine = INNODB;


