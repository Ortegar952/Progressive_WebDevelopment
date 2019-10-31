-- Part 1 =======================

-- Drop DB if exists
DROP DATABASE IF EXISTS nba_db;


-- Create DB nba_db
CREATE DATABASE nba_db;

-- Connect to nba_db
\c nba_db;

-- Drop table if exists
DROP TABLE IF EXISTS players;

-- Create table here
CREATE TABLE players(
	id SERIAL PRIMARY KEY,
	name VARCHAR (50) NOT NULL,
	age INTEGER NOT NULL,
	team VARCHAR(3) NOT NULL,
	games INTEGER NOT NULL,
	points INTEGER NOT NULL

);

-- Insert player here
INSERT INTO players(name,age,team,games,points)
VALUES ('Anderson Varejao', 29,'CLE',25,271);


-- Part 2 =======================
-- Uncomment COPY players statement and modify it with YOUR file path!


-- COPY players
--   (name, age, team, games, points)
-- FROM '/Users/briancarela/code/testing/psqlTesting/psql_nba_style/nba_season_2011-2012.csv'
--     DELIMITER ',' CSV;

COPY players
(name, age, team, games, points)
FROM '/Users/TylerDurden/Desktop/nba_sql/nba_season_2011-2012.csv'
DELIMITER ',' CSV;

