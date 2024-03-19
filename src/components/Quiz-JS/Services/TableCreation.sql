--SQL
--Drop Table
DROP TABLE quiz;

ALTER TABLE options DROP CONSTRAINT quiz_id_FK;

DROP TABLE options;

--Drop Sequence
DROP SEQUENCE quiz_id_seq;
DROP SEQUENCE options_id_seq;

--Create Sequence
CREATE SEQUENCE quiz_id_seq START WITH 1 INCREMENT BY 1 MAXVALUE 999 NOCACHE NOCYCLE;
CREATE SEQUENCE options_id_seq START WITH 1 INCREMENT BY 1 MAXVALUE 999 NOCACHE NOCYCLE;

--Create Table 
CREATE TABLE options
(
    options_id integer DEFAULT quiz_id_seq.NEXTVAL,
    quizOption VARCHAR2(1000) NOT NULL,
    quiz_id integer ,
    CONSTRAINT options_id_PK PRIMARY KEY (options_id),
    CONSTRAINT quiz_id_FK FOREIGN KEY (quiz_id) REFERENCES quiz(quiz_id) ON DELETE CASCADE
);

CREATE TABLE quiz
(
    quiz_id integer DEFAULT options_id_seq.NEXTVAL,
    quizQuestion VARCHAR2(1000) NOT NULL
);


--MySQL Version is below 
--================================================================================================================================--
--Drop Table
DROP TABLE IF EXISTS options;
DROP TABLE IF EXISTS quiz;


--Create Table 
CREATE TABLE quiz
(
    quiz_id INT AUTO_INCREMENT,
    quizQuestion VARCHAR(1000) NOT NULL,
    PRIMARY KEY (quiz_id)
);

CREATE TABLE options
(
    options_id INT AUTO_INCREMENT,
    quizOption VARCHAR(1000) NOT NULL,
    quiz_id INT,
    optionWeightage INT,
    PRIMARY KEY (options_id),
    FOREIGN KEY (quiz_id) REFERENCES quiz(quiz_id) ON DELETE CASCADE
);

