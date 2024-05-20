import { PUT } from "../../../constants";

import { schema } from "./schema";
import { handler, route } from "./handler";

export default { method: PUT, route, schema, handler };
