import z from "zod";

import { dtoDeck } from "../../../dto";

const params = dtoDeck
  .pick({ id: true })
  .extend({ id: z.string().trim().min(1) });

const schema = {
  params,
};

export { schema };
