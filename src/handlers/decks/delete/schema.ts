import { dtoDeck } from "../../../dto";

const body = dtoDeck.pick({ id: true });

const schema = {
  body,
};

export { schema };
