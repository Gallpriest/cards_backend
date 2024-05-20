import type { DeckService } from "../../../services/decks";

import type { HandlerReply, HandlerRequest } from "./types";

const route = "/decks/delete";

function handler(service: DeckService) {
  return async function (request: HandlerRequest, reply: HandlerReply) {
    try {
      await service.deleteDeck(request.body);

      reply
        .code(200)
        .send({ message: `Deck ${request.body.id} has been deleted` });
    } catch (error) {
      throw error;
    }
  };
}

export { handler, route };
