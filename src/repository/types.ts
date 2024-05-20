import z from "zod";

import { dto } from "../dto";

const getCardPayload = dtoCard.pick({ id: true });
const createCardPayload = dtoCard.omit({ id: true });
const deleteCardPayload = dtoCard.pick({ id: true });
const updateCardPayload = dtoCard.partial({ value: true, translation: true });

type CardRecord = z.infer<typeof dto>;
type CardGetPayload = z.infer<typeof getCardPayload>;
type CardCreatePayload = z.infer<typeof createCardPayload>;
type CardDeletePayload = z.infer<typeof deleteCardPayload>;
type CardUpdatePayload = z.infer<typeof updateCardPayload>;

export type {
  CardRecord,
  CardGetPayload,
  CardCreatePayload,
  CardDeletePayload,
  CardUpdatePayload,
};
