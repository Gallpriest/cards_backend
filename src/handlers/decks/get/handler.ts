import type { DeckService } from "../../../services/decks";
import type { HandlerRequest, HandlerReply } from "./types";

const route = "/decks/:id";

function handler(service: DeckService) {
  return async function (request: HandlerRequest, reply: HandlerReply) {
    try {
      const payload = { id: Number(request.params.id) };
      const data = await service.getDeck(payload);

      reply.code(200).send({ data });
    } catch (error) {
      throw error;
    }
  };
}

export { handler, route };
