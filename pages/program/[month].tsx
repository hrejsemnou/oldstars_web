import { useRouter } from 'next/router'
import Link from 'next/link';

import Layout from '../../components/Layout'
import { getProgram } from '../../lib/markdown'
import { Program as ProgramInterface, parseProgram, filterByMonth } from '../../lib/parseProgram';

import styles from './Program.module.scss';

const Program = ({ program, month }: { month: number, program: ProgramInterface[] }) => {
  const parsedProgram = filterByMonth(parseProgram(program), month);
  const router = useRouter();
  return router.isFallback ? (
    <Layout title = "OLDstars > Program">
      <div>Loading...</div>
    </Layout>
  ) : (
    <Layout title="OLDstars > Program">
      {parsedProgram.length === 0 ? (
        <p>Na tento měsíc ještě nejsou naplánována žádná představení.</p>
      ) : (
        parsedProgram.map(item => (
          <Link href={`/repertoar/${item.slug}`} key={`${item.slug}${item.date}${item.time}`}>
            <a>
              <div className={styles.programItem}>
                <div className={styles.timeAndInfo}>
                  <div className={styles.info}>
                    <span className={styles.title}>{item.title}</span>
                    <span className={styles.note}>{item.note}</span>
                  </div>
                  <div className={styles.datetime}>
                    <span className="text-bold">{item.date}</span>
                    <span className={styles.time}>{item.time}</span>
                    <span className={styles.day}>{item.day}</span>
                  </div>
                </div>
                <div className={styles.place}>
                  <span>{item.place}</span>
                </div>
              </div>
            </a>
          </Link>
        ))
      )}
    </Layout>
  );
};

export async function getStaticProps({ params } : { params: { month: number } }) {
  const program = getProgram()
  return {
    props: {
      month: params.month,
      program: program,
    }
  };
}

export async function getStaticPaths() {
  const paths = [
    '/program/1',
    '/program/2',
    '/program/3',
    '/program/4',
    '/program/5',
    '/program/6',
    '/program/7',
    '/program/8',
    '/program/9',
    '/program/10',
    '/program/11',
    '/program/12',
  ]

  return {
    paths,
    fallback: false,
  }
}

export default Program;
