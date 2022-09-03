import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'

import { getNews, getNewsContentBySlug } from '../../lib/markdown'
import Layout from '../../components/Layout'
import ImageGallery from '../../components/ImageGallery';

const Snippet = ({ news }) => {
  const router = new useRouter()
  console.log(news.images);
  return router.isFallback ? (
    <Layout title = "OLDstars > Novinky">
      <div>Loading...</div>
    </Layout>
  ) : (
    <Layout title = {`OLDstars > Novinky > ${news.date}`}>
      <React.Fragment key={news.title}>
        <h2 className="text-bold">{news.title}</h2>
        <p>{news.date}</p>
        <div>
          <ReactMarkdown
            source={news.content}
          />
        </div>
        <ImageGallery images={news.images?.sort().map(image => `/news/${news.slug}/images/${image}`)} />
        <hr />
      </React.Fragment>
    </Layout>
  )
}

export default Snippet

export async function getStaticProps({ params }) {
  const { slug } = params
  const news = getNewsContentBySlug(slug, [
    'slug',
    'date',
    'title',
    'content',
    'images',
  ])

  return {
    props: {
      news: news,
    },
  }
}

export async function getStaticPaths() {
  const news = getNews(['slug'])
  const paths = news.map(({ slug }) => ({
    params: {
      slug,
    },
  }))

  return {
    paths,
    fallback: false, // False for production, true for testing on local
  }
}
