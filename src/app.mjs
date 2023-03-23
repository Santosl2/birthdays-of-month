import express from "express";
import { birthdaysOfDay, getNameAndDay, loadPDFLines } from "./utils/index.mjs";

const app = express();
const PORT = process.env.PORT || 3333;

app.get("/birthdays", async (req, res) => {
  const lines = await loadPDFLines();
  const values = getNameAndDay(lines);
  const valuesOfDay = birthdaysOfDay(values);

  return res.json({
    rows: valuesOfDay,
  });
});

app.listen(PORT, () => {
  console.log("Server listen in PORT" + PORT);
});
