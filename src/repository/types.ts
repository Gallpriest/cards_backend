import z from "zod";

import { dtoCard, dtoDeck } from "../dto";

const getCardPayload = dtoCard.pick({ id: true });
const createCardPayload = dtoCard.omit({ id: true });
const deleteCardPayload = dtoCard.pick({ id: true });
const updateCardPayload = dtoCard.partial({ value: true, translation: true });

const getDeckPayload = dtoDeck.pick({ id: true });
const deleteDeckPayload = dtoDeck.pick({ id: true });
const createDeckPayload = dtoDeck.pick({ name: true });
const updateDeckPayload = dtoDeck
  .extend({ cards: z.array(z.number()) })
  .partial({ name: true, cards: true });

type CardRecord = z.infer<typeof dtoCard>;
type CardGetPayload = z.infer<typeof getCardPayload>;
type CardCreatePayload = z.infer<typeof createCardPayload>;
type CardDeletePayload = z.infer<typeof deleteCardPayload>;
type CardUpdatePayload = z.infer<typeof updateCardPayload>;

type DeckRecord = z.infer<typeof dtoDeck>;
type DeckGetPayload = z.infer<typeof getDeckPayload>;
type DeckCreatePayload = z.infer<typeof createDeckPayload>;
type DeckDeletePayload = z.infer<typeof deleteDeckPayload>;
type DeckUpdatePayload = z.infer<typeof updateDeckPayload>;

export type {
  CardRecord,
  CardGetPayload,
  CardCreatePayload,
  CardDeletePayload,
  CardUpdatePayload,
  DeckRecord,
  DeckGetPayload,
  DeckCreatePayload,
  DeckDeletePayload,
  DeckUpdatePayload,
};
