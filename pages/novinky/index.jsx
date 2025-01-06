import { Fragment } from "react";
import Layout from "../../components/Layout";
import { getNews } from "../../lib/markdown";
import { parseDate } from "../../lib/utils";

import ReactMarkdown from "react-markdown";
import Link from "next/link";

const Home = ({ news }) => (
  <Layout title="OLDstars > Novinky">
    <h2>Novinky</h2>
    {news
      .sort((a, b) => parseDate(b.date) - parseDate(a.date))
      .map((item) => (
        <Fragment key={item.title}>
          <Link legacyBehavior href={`/novinky/${item.slug}`}>
            <a>
              <h3 className="text-bold">{item.title}</h3>
            </a>
          </Link>
          <p>{item.date}</p>
          <div>
            <ReactMarkdown children={item.content} />
          </div>
          <hr />
        </Fragment>
      ))}
  </Layout>
);

export default Home;

export async function getStaticProps() {
  const news = getNews(["slug", "date", "title", "content"]);
  return {
    props: {
      news: news,
    },
  };
}
