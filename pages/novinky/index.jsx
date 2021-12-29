import Layout from '../../components/Layout'
import { getNews } from '../../lib/markdown';

import ReactMarkdown from 'react-markdown'
import Link from 'next/link';

const Home = ({ news }) => (
  <Layout title="OLDstars > Novinky">
    <h2>Novinky</h2>
    {news.sort((a, b) => {
      if (a.date > b.date) { return -1; }
      if (b.date > a.date) { return 1; }
      return 0;
    }).slice(0, 2).map(item => (
      <React.Fragment key={item.title}>
        <Link href={`/novinky/${item.slug}`}>
          <a><h3 className="text-bold">{item.title}</h3></a>
        </Link>
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
  </Layout>
)

export default Home

export async function getStaticProps() {
  const news = getNews(['slug', 'date', 'title', 'content'])
  return {
    props: {
      news: news,
    }
  };
}
