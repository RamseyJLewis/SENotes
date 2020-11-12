# PSQL PRACTICE 
### Creating my own DB and utilizing DB to populate a web page

## TASKS
* Create DB (Cars)
* Create Tables (Make) (Model) (M.P.G) (TOP_MPH)
* Add a few cars at least 4
* Write a selector to retrive info 
* Write Javascript to dispaly info on page



## NOTE
CREATE TABLE Cars( 
ID SERIAL PRIMARY KEY,
make VARCHAR(30),
model VARCHAR(30),
m_p_g  NUMERIC,
top_mph NUMERIC,
price
);

INSERT INTO Cars (make,model,top_mph,price) VALUES
 ('Porsche','911',182,99200),
('MercadesBenz','AMG GTR',182,162900),
('Pagani','Huayra',236,3400000),
('Koenigsegg','Agera',249,2100000);

ALTER TABLE Cars ALTER COLUMN m_p_g  TYPE price;
ALTER TABLE Cars DROP COLUMN m_p_g;
ALTER TABLE Cars ADD price VARCHAR;


## Repeate instructions:
* Download PSQL
* Log intp PSQL (via CLI)
* Create Database
* connect to database
* create tables
* 