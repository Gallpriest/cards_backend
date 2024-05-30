import type { FastifyRequest, FastifyReply } from "fastify";

type HandlerReply = FastifyReply;
type HandlerRequest = FastifyRequest;

export { HandlerReply, HandlerRequest };
