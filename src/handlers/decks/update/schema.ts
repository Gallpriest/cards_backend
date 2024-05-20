import z from "zod";

import { dtoDeck } from "../../../dto";

const body = dtoDeck
  .extend({ cards: z.array(z.number()) })
  .partial({ name: true, cards: true });

const schema = {
  body,
};

export { schema };
