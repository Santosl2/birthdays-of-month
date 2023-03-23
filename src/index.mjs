import fs from "fs";
import { birthdaysOfDay, getNameAndDay, loadPDFLines } from "./utils/index.mjs";

(async () => {
  const lines = await loadPDFLines();
  const values = getNameAndDay(lines);
  const valuesOfDay = birthdaysOfDay(values);

  fs.writeFile("./data.json", JSON.stringify(values), (err, c) => {});
  fs.writeFile(
    "./data-of-day.json",
    JSON.stringify(valuesOfDay),
    (err, c) => {}
  );
})();
