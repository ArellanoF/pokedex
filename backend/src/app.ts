import initializeServer from "./server";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

const port = process.env.WEB_PORT ?? 7768;

(async () => {
  try {
    initializeServer(port as number);
  } catch (err) {
    err;
    process.exit(1);
  }
})();
