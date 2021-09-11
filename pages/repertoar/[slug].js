import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image';

import { getAllSnippets, getPageContentBySlug } from '../../lib/markdown'
import { createDateObject } from '../../lib/parseProgram';
import Layout from '../../components/Layout'
import styles from './Detail.module.scss';
import SplitContent from '../../components/SplitContent';

const getTitle = (writer, translation) => {
  if (translation) {
    return `${writer} / ${translation}`;
  } else {
    return writer;
  }
}

const Snippet = ({ page }) => {
  const router = new useRouter()
  return router.isFallback ? (
    <Layout title = "OLDStars > Repertoár">
      <div>Loading...</div>
    </Layout>
  ) : (
    <Layout title = {`OLDStars > Repertoár > ${page.title}`}>
      <SplitContent
        leftChild={
          <div>
            <h2>{page.title}</h2>
            <h3>{getTitle(page.writer, page.translation)}</h3>
            <strong><em>{page.note}</em></strong>
            <div>
              <ReactMarkdown
                source={page.content}
              />
            </div>
            <div>
              <div>
                <span>Režie: </span><strong>{page.director}</strong>
              </div>
              <div>
                <span>Dramaturgie: </span><strong>{page.dramaturgy}</strong>
              </div>
              <div>
                <span>Hraje: </span><strong>{page.actors}</strong>
              </div>
            </div>
            <div className={styles.section}>
              <div>
                <span>Délka představení: </span><strong>{page.length}</strong>
              </div>
              <div>
                <span>Premiéra: </span><strong>{page.premiere}</strong>
              </div>
              <div>
                <span>Recenze: </span><strong><a href={page.review}>i-divadlo</a></strong>
              </div>
            </div>
          </div>
        }
        rightChild={
          <div>
            <h2>Kdy hrajeme</h2>
            {page.reruns.filter(item => createDateObject(item) > new Date()).map(rerun => (
              <div className="text-bold" key={`${rerun.date} ${rerun.time}`}>
                {`${rerun.date} ${rerun.time} ${rerun.place}`}
              </div>
            ))}
            <div className={styles.gallery}>
              {page.images.map(i => (
                <Image
                  key={i}
                  src={`/productions/${page.slug}/images/${i}`}
                  alt={`${page.title}/${i}`}
                  height={135}
                  width={240}
                />
              ))}
            </div>
          </div>
        }
      />
    </Layout>
  )
}

export default Snippet

export async function getStaticProps({ params }) {
  const { slug } = params
  const page = getPageContentBySlug(slug, [
    'slug',
    'title',
    'writer',
    'translation',
    'note',
    'director',
    'dramaturgy',
    'actors',
    'length',
    'premiere',
    'review',
    'content',
    'images',
    'reruns',
  ])

  return {
    props: {
      page: {
        ...page,
        markdown: page.content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllSnippets(['slug'])
  const paths = posts.map(({ slug }) => ({
    params: {
      slug,
    },
  }))

  return {
    paths,
    fallback: false, // False for production, true for testing on local
  }
}
