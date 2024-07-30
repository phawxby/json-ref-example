import RefParser from "@apidevtools/json-schema-ref-parser";
import { join } from "path";
import { readFile } from "fs/promises";
import Ajv from "ajv/dist/2019";

(async () => {
  const fullPath = join(__dirname, "schema/root.schema.json");
  const bundled = await RefParser.bundle(fullPath);

  console.dir(bundled, { depth: 10 });

  const ajv = new Ajv({ strict: false });
  ajv.validate(
    bundled,
    await readFile(join(__dirname, "example.json"), "utf-8")
  );
})();
