import type { CardService } from "../../../services/cards";
import type { HandlerReply, HandlerRequest } from "./types";

const route = "/cards/:id";

function handler(service: CardService) {
  return async function (request: HandlerRequest, reply: HandlerReply) {
    try {
      const payload = { id: Number(request.params.id) };
      const result = await service.getCard(payload);

      reply.code(200).send(result);
    } catch (error) {
      throw error;
    }
  };
}

export { handler, route };
