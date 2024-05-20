import { GET, POST, PUT, DELETE } from "../constants";

import type {
  FastifyReply,
  FastifyRequest,
  FastifyInstance,
  FastifyBaseLogger,
} from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import type { Server, IncomingMessage, ServerResponse } from "node:http";

type AppServer = FastifyInstance<
  Server<typeof IncomingMessage, typeof ServerResponse>,
  IncomingMessage,
  ServerResponse<IncomingMessage>,
  FastifyBaseLogger,
  ZodTypeProvider
>;

type ServerHandlers = {
  method: typeof GET | typeof POST | typeof DELETE | typeof PUT;
  route: string;
  schema: Record<string, any>;
  handler: (
    ...services: any[]
  ) => (request: FastifyRequest<any>, reply: FastifyReply) => Promise<void>;
};

type Payload<T extends (...args: any) => any> = Parameters<T>[0];

export type { ServerHandlers, Payload, AppServer };
