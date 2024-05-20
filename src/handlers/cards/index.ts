import getCard from "./get";
import createCard from "./create";
import deleteCard from "./delete";
import updateCard from "./update";

import type { ServerHandlers } from "../../types";

const cardHandlers: ServerHandlers[] = [
  getCard,
  createCard,
  deleteCard,
  updateCard,
];

export { cardHandlers };
