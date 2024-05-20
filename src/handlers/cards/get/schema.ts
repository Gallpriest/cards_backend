import z from "zod";

import { dtoCard } from "../../../dto";

const params = z.object({
  id: z.string().trim().min(1),
});

const reply = dtoCard;

const schema = {
  reply,
  params,
};

export { schema };
