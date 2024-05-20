import type { CardService } from "../../../services/cards";
import type { HandlerRequest, HandlerReply } from "./types";

const route = "/cards/create";

function handler(service: CardService) {
  return async function (request: HandlerRequest, reply: HandlerReply) {
    try {
      await service.createCard(request.body);

      reply.code(200).send({ message: "Created" });
    } catch (error) {
      throw error;
    }
  };
}

export { handler, route };
