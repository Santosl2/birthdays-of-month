import { create } from "@open-wa/wa-automate";
import { schedule } from "node-cron";
import { getGroupMembers } from "../utils/getGroupMembers.mjs";

export async function connectToWhatsapp(cb) {
  create({
    sessionId: "GPT-3",
    multiDevice: false,
    authTimeout: 60,
    blockCrashLogs: true,
    disableSpins: true,
    headless: true,
    hostNotificationLang: "PT_BR",
    logConsole: false,
    popup: true,
    qrTimeout: 0,
  }).then(async (client) => cb(client));
}
