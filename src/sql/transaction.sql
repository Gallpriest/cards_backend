BEGIN;

CREATE TABLE cards (
  id SERIAL PRIMARY KEY,
  value varchar(255) NOT NULL,
  translation varchar(255) NOT NULL
);

CREATE TABLE decks (
  id SERIAL PRIMARY KEY,
  name varchar(255) NOT NULL,
  cards integer[] NOT NULL
);

COMMIT;