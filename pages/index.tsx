import React from 'react';
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link';

import Layout from '../components/Layout'
import SplitContent from '../components/SplitContent';
import { getProgram, getNews } from '../lib/markdown';
import { Program as ProgramInterface, getNextTwentyPlays } from '../lib/parseProgram';
import styles from './Index.module.scss';

export interface News {
  title: string;
  date: string;
  content: string;
}

const Home = ({ program, news } : { program: ProgramInterface[], news: News[] }) => {
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
            {news.sort((a, b) => {
              if (a.date > b.date) { return -1; }
              if (b.date > a.date) { return 1; }
              return 0;
            }).slice(0, 2).map(item => (
              <React.Fragment key={item.title}>
                <span className="text-bold">{item.title}</span>
                <p>{item.date}</p>
                <div>
                  <ReactMarkdown
                    source={item.content}
                  />
                </div>
                <hr />
              </React.Fragment>
            ))
            }
          </>
        }
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const news = getNews(['date', 'title', 'content'])
  const program = getProgram()
  return {
    props: {
      program: program,
      news: news,
    }
  };
}

export default Home
