import getDeck from "./get";
import allDecks from "./all";
import createDeck from "./create";
import deleteDeck from "./delete";
import updateDeck from "./update";

import type { ServerHandlers } from "../../types";

const deckHandlers: ServerHandlers[] = [
  getDeck,
  allDecks,
  createDeck,
  deleteDeck,
  updateDeck,
];

export { deckHandlers };
