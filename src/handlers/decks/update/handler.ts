import type { DeckService } from "../../../services/decks";
import type { HandlerRequest, HandlerReply } from "./types";

const route = "/decks/update";

function handler(service: DeckService) {
  return async function (request: HandlerRequest, reply: HandlerReply) {
    try {
      await service.updateDeck(request.body);

      reply.code(200).send({ message: "Deck has been updated" });
    } catch (error) {
      throw error;
    }
  };
}

export { handler, route };
