import z from "zod";

const dtoCard = z.object({
  id: z.number(),
  value: z.string(),
  translation: z.string(),
});

export { dtoCard };
