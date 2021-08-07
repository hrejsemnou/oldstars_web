import Link from 'next/link';

import Layout from '../components/Layout'
import { getProgram } from '../lib/markdown'

import styles from './Program.module.scss';

interface Program {
  title: string;
  slug: string;
  note: string;
  reruns: {
    date: string;
    time: string;
    place: string;
  }[];
}

interface ParsedProgram {
  day: string;
  title: string;
  slug: string;
  note: string;
  place: string;
  date: string;
  time: string;
  dateObject: Date;
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

const Program = ({ program }: { program: Program[] }) => {
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
  return (
    <Layout title="OLDStars > Program">
      {sortedProgram.map(item => (
        <Link href={`/repertoar/${item.slug}`} key={`${item.slug}${item.date}${item.time}`}>
          <a>
            <div className={styles.programItem}>
              <div className={styles.datetime}>
                <span className="text-bold">{item.date}</span>
                <span className={styles.time}>{item.time}</span>
                <span className={styles.day}>{item.day}</span>
              </div>
              <div className={styles.info}>
                <span className={styles.title}>{item.title}</span>
                <span>{item.note}</span>
              </div>
              <div className={styles.place}>
                <span>{item.place}</span>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </Layout>
  );
};

export async function getStaticProps() {
  const program = getProgram()
  return {
    props: {
      program: program,
    }
  };
}

export default Program;
