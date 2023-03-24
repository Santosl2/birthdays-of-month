import dotenv from "dotenv";
dotenv.config();

import { connectToWhatsapp } from "./wsocket/index.mjs";
import { createCron } from "./utils/schedule.mjs";

connectToWhatsapp((client) => createCron(client));
