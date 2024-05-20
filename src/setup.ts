import { CardService } from "./services/cards";
import { DeckService } from "./services/decks";
import { cardHandlers } from "./handlers/cards";
import { deckHandlers } from "./handlers/decks";

import type { AppServer } from "./types";
import type { Repository } from "./repository";

function setup(server: AppServer, repository: Repository) {
  const cardService = new CardService(repository);
  const deckService = new DeckService(repository);

  cardHandlers.forEach(({ method, route, schema, handler }) => {
    server[method](route, { schema }, handler(cardService));
  });

  deckHandlers.forEach(({ method, route, schema, handler }) => {
    server[method](route, { schema }, handler(deckService));
  });
}

export { setup };
