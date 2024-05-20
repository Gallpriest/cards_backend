import z from "zod";

import type { FastifyRequest, FastifyReply } from "fastify";

import { schema } from "./schema";

type HandlerReply = FastifyReply;
type HandlerRequest = FastifyRequest<{
  Body: z.infer<typeof schema.body>;
  Reply: z.infer<typeof schema.reply>;
}>;

export { HandlerReply, HandlerRequest };
