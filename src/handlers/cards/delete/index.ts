import { DELETE } from "../../../constants";

import { schema } from "./schema";
import { handler, route } from "./handler";

export default { method: DELETE, route, schema, handler };
