import getCard from "./get";
import allCards from "./all";
import createCard from "./create";
import deleteCard from "./delete";
import updateCard from "./update";

import type { ServerHandlers } from "../../types";

const cardHandlers: ServerHandlers[] = [
  getCard,
  allCards,
  createCard,
  deleteCard,
  updateCard,
];

export { cardHandlers };
