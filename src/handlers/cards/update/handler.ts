import type { CardService } from "../../../services/cards";
import type { HandlerRequest, HandlerReply } from "./types";

const route = "/cards/update";

function handler(service: CardService) {
  return async function (request: HandlerRequest, reply: HandlerReply) {
    try {
      await service.updateCard(request.body);

      reply.code(200).send({ message: `Updated - ${request.body.id}` });
    } catch (error) {
      throw error;
    }
  };
}

export { handler, route };
