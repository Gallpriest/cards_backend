import { POST } from "../../../constants";

import { schema } from "./schema";
import { handler, route } from "./handler";

export default { method: POST, route, schema, handler };
