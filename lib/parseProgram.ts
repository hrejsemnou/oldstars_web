export interface Program {
  title: string;
  slug: string;
  note: string;
  reruns: {
    date: string;
    time: string;
    place: string;
  }[];
}

export interface ParsedProgram {
  day: string;
  title: string;
  slug: string;
  note: string;
  place: string;
  date: string;
  time: string;
  dateObject: Date;
}

export function getMonthName(month: number) {
  switch (month) {
    case 0:
      return "Leden";
    case 1:
      return "Únor";
    case 2:
      return "Březen";
    case 3:
      return "Duben";
    case 4:
      return "Květen";
    case 5:
      return "Červen";
    case 6:
      return "Červenec";
    case 7:
      return "Srpen";
    case 8:
      return "Září";
    case 9:
      return "Říjen";
    case 10:
      return "Listopad";
    case 11:
      return "Prosinec";
    default:
      return "Neznámý měsíc";
  }
}

function getDayName(day: number) {
  switch (day) {
    case 0:
      return "Neděle";
    case 1:
      return "Pondělí";
    case 2:
      return "Úterý";
    case 3:
      return "Středa";
    case 4:
      return "Čtvrtek";
    case 5:
      return "Pátek";
    case 6:
      return "Sobota";
    default:
      return "Špatné datum v repertoáru";
  }
}

export const createDateObject = (rerun: { date: string; time: string }) => {
  const dateParts = rerun.date.split(".");
  const timeParts = rerun.time.split(":");
  const dateObject = new Date(
    new Date(
      +dateParts[2],
      +dateParts[1] - 1,
      +dateParts[0],
      +timeParts[0],
      +timeParts[1]
    )
  );
  return dateObject;
};

export const parseProgram = (program: Program[]) => {
  const parsedProgram: ParsedProgram[] = [];
  const dateObjects: Date[] = [];
  program.forEach((p) => {
    p.reruns
      ? p.reruns.forEach((rerun) => {
          const dateObject = createDateObject(rerun);
          const dayName = getDayName(dateObject.getDay());
          dateObjects.push(dateObject);
          parsedProgram.push({
            day: dayName,
            slug: p.slug,
            date: rerun.date,
            title: p.title,
            note: p.note,
            time: rerun.time,
            place: rerun.place,
            dateObject: dateObject,
          });
        })
      : [];
  });
  const filteredProgram = parsedProgram.filter(
    (item) => item.dateObject >= new Date()
  );
  const sortedProgram = filteredProgram.sort((dateA, dateB) => {
    if (dateA.dateObject > dateB.dateObject) {
      return 1;
    }
    if (dateA.dateObject < dateB.dateObject) {
      return -1;
    }
    return 0;
  });
  return sortedProgram;
};

export const filterByMonth = (
  program: ParsedProgram[],
  month: number | null
) => {
  if (month === null) {
    return program;
  }
  const today = new Date();
  return program
    .filter((item) => item.dateObject.getMonth() === month - 1)
    .filter((item) => {
      if (item.dateObject.getMonth() < today.getMonth()) {
        return item.dateObject.getFullYear() > today.getFullYear();
      } else {
        return item.dateObject.getFullYear() === today.getFullYear();
      }
    })
    .filter((item) => item.dateObject.getFullYear() <= today.getFullYear() + 1)
    .filter((item) => item.dateObject >= today);
};

export const getNextPlays = (program: Program[]) => {
  const parsedProgram = parseProgram(program);
  return parsedProgram.slice(0, 5);
};
