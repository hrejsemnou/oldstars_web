import Link from 'next/link';

import Layout from '../components/Layout'
import { getProgram } from '../lib/markdown'
import { Program as ProgramInterface, parseProgram } from '../lib/parseProgram';

import styles from './Program.module.scss';

const Program = ({ program }: { program: ProgramInterface[] }) => {
  const parsedProgram = parseProgram(program);
  return (
    <Layout title="OLDStars > Program">
      {parsedProgram.map(item => (
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
