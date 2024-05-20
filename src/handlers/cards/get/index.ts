import { GET } from "../../../constants";

import { schema } from "./schema";
import { handler, route } from "./handler";

export default { method: GET, route, schema, handler };
