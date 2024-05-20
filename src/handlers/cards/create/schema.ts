import { dtoCard } from "../../../dto";

const body = dtoCard.pick({ value: true, translation: true });

const schema = {
  body,
};

export { schema };
