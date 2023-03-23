import { PdfReader } from "pdfreader";

function isDay(str) {
  return str.length === 2;
}

export async function loadPDFLines() {
  const LINES = [];

  return new Promise((resolve, reject) => {
    new PdfReader().parseFileItems("./planilha.pdf", (err, item) => {
      if (item?.text) LINES.push(item.text);
      if (!item) resolve(LINES);
      if (err) reject(err);
    });
  });
}

export function getNameAndDay(lines) {
  const BIRTHDAYS_OF_MONTH = [];
  for (let index = 0; index < lines.length; index++) {
    const element = lines[index];

    if (isDay(element)) {
      const name = lines[index + 1];
      const phone = lines[index + 2];

      BIRTHDAYS_OF_MONTH.push({
        name,
        day: element,
        phone,
      });
    }
  }

  return BIRTHDAYS_OF_MONTH;
}

export function birthdaysOfDay(data) {
  const actualDay = new Date().getDate();

  return data.filter((e) => e.day == actualDay);
}
