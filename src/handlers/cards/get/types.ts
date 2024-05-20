import z from "zod";

import type { FastifyRequest, FastifyReply } from "fastify";

import { schema } from "./schema";

type HandlerReply = FastifyReply;
type HandlerRequest = FastifyRequest<{
  Reply: z.infer<typeof schema.reply>;
  Params: z.infer<typeof schema.params>;
}>;

export { HandlerReply, HandlerRequest };
