import getDeck from "./get";
import createDeck from "./create";
import deleteDeck from "./delete";
import updateDeck from "./update";

import type { ServerHandlers } from "../../types";

const deckHandlers: ServerHandlers[] = [
  getDeck,
  createDeck,
  deleteDeck,
  updateDeck,
];

export { deckHandlers };
