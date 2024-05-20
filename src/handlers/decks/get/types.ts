import z from "zod";

import type { FastifyRequest, FastifyReply } from "fastify";

import { schema } from "./schema";

type HandlerReply = FastifyReply;
type HandlerRequest = FastifyRequest<{
  Params: z.infer<typeof schema.params>;
}>;

export { HandlerReply, HandlerRequest };
