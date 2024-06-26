import z from "zod";

import { dtoCard } from "../../../dto";

const params = dtoCard
  .pick({ id: true })
  .extend({ id: z.string().trim().min(1) });

const schema = {
  params,
};

export { schema };
