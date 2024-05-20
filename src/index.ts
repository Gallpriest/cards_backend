import Fastify from "fastify";
import {
  validatorCompiler,
  serializerCompiler,
} from "fastify-type-provider-zod";

import type { ZodTypeProvider } from "fastify-type-provider-zod";

import { setup } from "./setup";
import { loadDevVariables } from "./env";
import { Repository } from "./repository";

async function bootstrap() {
  const { appHost: host, appPort: port } = loadDevVariables();
  const server = Fastify({ logger: true }).withTypeProvider<ZodTypeProvider>();

  type a = typeof server;

  server
    .setValidatorCompiler(validatorCompiler)
    .setSerializerCompiler(serializerCompiler);

  const repository = new Repository();

  setup(server, repository);

  server.listen({ host, port });
}

bootstrap();
