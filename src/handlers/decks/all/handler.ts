import type { DeckService } from "../../../services/decks";
import type { HandlerRequest, HandlerReply } from "./types";

const route = "/decks/all";

function handler(service: DeckService) {
  return async function (_: HandlerRequest, reply: HandlerReply) {
    try {
      const data = await service.allDecks();

      reply.code(200).send({ data });
    } catch (error) {
      throw error;
    }
  };
}

export { handler, route };
