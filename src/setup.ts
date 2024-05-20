import { CardService } from "./services/cards";
import { cardHandlers } from "./handlers/cards";

import type { AppServer } from "./types";
import type { Repository } from "./repository";

function setup(server: AppServer, repository: Repository) {
  const cardService = new CardService(repository);

  cardHandlers.forEach(({ method, route, schema, handler }) => {
    server[method](route, { schema }, handler(cardService));
  });
}

export { setup };
