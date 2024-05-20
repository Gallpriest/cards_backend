import type { CardService } from "../../../services/cards";
import type { HandlerRequest, HandlerReply } from "./types";

const route = "/cards/delete";

function handler(service: CardService) {
  return async function (request: HandlerRequest, reply: HandlerReply) {
    try {
      await service.deleteCard(request.body);

      reply.code(200).send({ message: "Deleted" });
    } catch (error) {
      throw error;
    }
  };
}

export { handler, route };
