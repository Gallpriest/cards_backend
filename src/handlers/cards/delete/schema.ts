import z from "zod";

import { dtoCard } from "../../../dto";

const body = dtoCard.pick({ id: true });

const reply = z.object({ message: z.string() });

const schema = {
  body,
  reply,
};

export { schema };
