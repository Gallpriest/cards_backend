import z from "zod";

const dtoCard = z.object({
  id: z.number(),
  value: z.string(),
  translation: z.string(),
});

const dtoDeck = z.object({
  id: z.number(),
  name: z.string(),
  cards: z.array(dtoCard),
});

export { dtoCard, dtoDeck };
