import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'

import { getAllSnippets, getPageContentBySlug } from '../../lib/markdown'
import { createDateObject } from '../../lib/parseProgram';
import Layout from '../../components/Layout'
import styles from './Detail.module.scss';
import SplitContent from '../../components/SplitContent';
import ImageGallery from '../../components/ImageGallery';

const getTitle = (writer, translation) => {
  if (translation) {
    return `${writer} / ${translation}`;
  } else {
    return writer;
  }
}

const Snippet = ({ page }) => {
  const router = new useRouter()
  const reruns = page.reruns ? page.reruns.filter(item => createDateObject(item) > new Date()) : [];
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
              {page.director ? (
                <div>
                  <span>Režie: </span><strong>{page.director}</strong>
                </div>
              ) : null }
              {page.dramaturgy ? (
                <div>
                  <span>Dramaturgie: </span><strong>{page.dramaturgy}</strong>
                </div>
              ) : null }
              {page.production ? (
                <div>
                  <span>Produkce: </span><strong>{page.production}</strong>
                </div>
              ) : null }
              {page.actors ? (
                <div>
                  <span>Hraje: </span><strong>{page.actors}</strong>
                </div>
              ) : null }
              {page.videoart ? (
                <div>
                  <span>Videoart: </span><strong>{page.videoart}</strong>
                </div>
              ) : null }
              {page.art ? (
                <div>
                  <span>Výtvarné řešení: </span><strong>{page.art}</strong>
                </div>
              ) : null }
              {page.scenography ? (
                <div>
                  <span>Scénografie: </span><strong>{page.scenography}</strong>
                </div>
              ) : null }
              {page.photography ? (
                <div>
                  <span>Fotografie: </span><strong>{page.photography}</strong>
                </div>
              ) : null }
              {page.edit ? (
                <div>
                  <span>Úprava: </span><strong>{page.edit}</strong>
                </div>
              ) : null }
              {page.music ? (
                <div>
                  <span>Hudba: </span><strong>{page.music}</strong>
                </div>
              ) : null }
            </div>
            <div className={styles.section}>
              {page.length ? (
                <div>
                  <span>Délka představení: </span><strong>{page.length}</strong>
                </div>
              ) : null }
              {page.premiere ? (
                <div>
                  <span>Premiéra: </span><strong>{page.premiere}</strong>
                </div>
              ) : null }
              {page.review ? (
                <div>
                  <span>Recenze: </span><strong><a href={page.review}>i-divadlo</a></strong>
                </div>
              ) : null }
            </div>
          </div>
        }
        rightChild={
          <div>
            <h2>Kdy hrajeme</h2>
            {reruns.length > 0 ? (
              reruns.map(rerun => (
                <div className={`text-bold ${styles.reruns}`} key={`${rerun.date} ${rerun.time}`}>
                  <div className={styles.datetime}>
                    <div>{`${rerun.date} ${rerun.time}`}</div>
                    <div>{rerun.place}</div>
                  </div>
                  <div className={styles.placetickets}>
                    {rerun.ticket && <a href={rerun.ticket}>Vstupenky</a>}
                  </div>
                </div>
                )
              )) : (
                <p>Momentálně není naplánovaná žádná repríza.</p>
              )
            }
            {page.images.length > 0 ? (
              <ImageGallery images={page.images?.sort().map(image => `/productions/${page.slug}/images/${image}`)} />
            ) : (
              <ImageGallery images={['/no-image.png']} />
            )}
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
    'production',
    'dramaturgy',
    'actors',
    'length',
    'premiere',
    'review',
    'content',
    'images',
    'scenography',
    'videoart',
    'art',
    'edit',
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
