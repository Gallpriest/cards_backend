import { dtoDeck } from "../../../dto";

const body = dtoDeck.pick({ name: true });

const schema = {
  body,
};

export { schema };
