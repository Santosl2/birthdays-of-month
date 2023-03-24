import { birthdaysOfDay, getNameAndDay, loadPDFLines } from "./index.mjs";
import { schedule } from "node-cron";
import { checkUserIsInGroup } from "./getGroupMembers.mjs";

export function createCron(client) {
  schedule(
    "0 40 12 * * *",
    async () => {
      const groupData = await getGroupMembers(client);

      const lines = await loadPDFLines();
      const values = getNameAndDay(lines);
      const valuesOfDay = birthdaysOfDay(values);

      const title = "*Aniversariantes do dia:*\n\n";
      const formatMessageToSend = valuesOfDay.map((data) => {
        const userIsInGroup = checkUserIsInGroup(groupData, data.phone);
        return `*Nome:* ${data.name}\n *Telefone*: ${
          data.phone
        }\n *Usuário está no grupo*: ${
          userIsInGroup ? "Sim, com este número" : "Não com este número"
        } ---- \n\n`;
      });

      client.sendText(
        process.env.NUMBER_TO_SEND,
        title.concat(formatMessageToSend)
      );
    },
    {
      scheduled: true,
      timezone: "America/Sao_Paulo",
    }
  );
}
