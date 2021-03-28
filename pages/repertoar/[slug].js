import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image';

import { getAllSnippets, getPageContentBySlug } from '../../lib/markdown'
import Layout from '../../components/Layout'

const Snippet = ({ page }) => {
  const router = new useRouter()
  return router.isFallback ? (
    <Layout>
      <div>Loading...</div>
    </Layout>
  ) : (
    <Layout>
      <h2>{page.title}</h2>
      <h3>{page.writer}</h3>
      <div>
        {
          page.images.map(i => (
            <Image
              src={`/productions/${page.slug}/images/${i}`}
              alt={`${page.title}/${i}`}
              height={150}
              width={250}
            />
          ))
        }
      </div>
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
      <div>
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
    'note',
    'director',
    'dramaturgy',
    'actors',
    'length',
    'premiere',
    'review',
    'content',
    'images',
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
