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
      return 'Leden';
    case 1:
      return 'Únor';
    case 2:
      return 'Březen';
    case 3:
      return 'Duben';
    case 4:
      return 'Květen';
    case 5:
      return 'Červen';
    case 6:
      return 'Červenec';
    case 7:
      return 'Srpen';
    case 8:
      return 'Září';
    case 9:
      return 'Říjen';
    case 10:
      return 'Listopad';
    case 11:
      return 'Prosinec';
    default:
      return 'Neznámý měsíc';
  }
}

function getDayName(day: number) {
  switch (day) {
    case 0:
      return 'Neděle';
    case 1:
      return 'Pondělí';
    case 2:
      return 'Úterý';
    case 3:
      return 'Středa';
    case 4:
      return 'Čtvrtek';
    case 5:
      return 'Pátek';
    case 6:
      return 'Sobota';
    default:
      return 'Špatné datum v repertoáru';
  };
}

export const parseProgram = (program: Program[]) => {
  const parsedProgram: ParsedProgram[] = [];
  const dateObjects: Date[] = [];
  program.forEach((p) => {
    p.reruns.forEach(rerun => {
      const dateParts = rerun.date.split('.');
      const timeParts = rerun.time.split(':');
      const dateObject = new Date(new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0], +timeParts[0], +timeParts[1]));
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
    });
  });
  const sortedProgram = parsedProgram.sort((dateA, dateB) => {
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
