import type { CardService } from "../../../services/cards";
import type { HandlerRequest, HandlerReply } from "./types";

const route = "/cards/all";

function handler(service: CardService) {
  return async function (_: HandlerRequest, reply: HandlerReply) {
    try {
      const data = await service.allCards();

      reply.code(200).send({ data });
    } catch (error) {
      throw error;
    }
  };
}

export { handler, route };
