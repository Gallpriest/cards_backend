CREATE TABLE decks (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  cards integer[]
);