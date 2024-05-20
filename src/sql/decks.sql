CREATE TABLE decks (
  id SERIAL PRIMARY KEY,
  name varchar(255) NOT NULL,
  cards integer[]
);