import { useRouter } from 'next/router'
import Link from 'next/link';

import Layout from '../components/Layout'
import SplitContent from '../components/SplitContent';
import { getProgram } from '../lib/markdown';
import { Program as ProgramInterface, getNextTwentyPlays } from '../lib/parseProgram';
import styles from './Program/Program.module.scss';

const Home = ({ program } : { program: ProgramInterface[] }) => {
  const parsedProgram = getNextTwentyPlays(program);
  const router = useRouter();
  return router.isFallback ? (
    <Layout title = "OLDStars > Program">
      <div>Loading...</div>
    </Layout>
  ) : (
    <Layout title="OLDStars">
      <SplitContent
        leftChild={
          <>
            <h2>Nejbližší představení</h2>
            {parsedProgram.length === 0 ? (
              <p>Momentálně nejsou naplánována žádná představení.</p>
            ) : (
              parsedProgram.map(item => (
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
              ))
            )}
          </>
        }
        rightChild={
          <>
            <h2>Aktuality</h2>
            <p>Lorem ipsum dolor...</p>
          </>
        }
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const program = getProgram()
  return {
    props: {
      program: program,
    }
  };
}

export default Home
