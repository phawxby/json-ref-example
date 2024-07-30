import RefParser from "@apidevtools/json-schema-ref-parser";
import { join } from "path";

(async () => {
  const fullPath = join(__dirname, "schema/root.schema.json");
  const bundled = await RefParser.bundle(fullPath);

  console.dir(bundled, { depth: 10 });
})();
