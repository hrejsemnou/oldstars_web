import Image from 'next/image';
import Link from 'next/link';

import Layout from '../../components/Layout'
import { getAllSnippets } from '../../lib/markdown'
import styles from './Index.module.scss';

const Guests = ({ previews }) => (
  <Layout title="OLDStars > Repertoár > Hosté">
      <div className={styles.previews}>
        {previews.filter(item => item.tag === "guests").map(p => {
          const thumbnail = p.images[Math.floor(Math.random() * p.images.length)];
          return (
            <div className={styles.preview}>
              <Link href={`/repertoar/${p.slug}`} key={p.slug}>
                <a className="text-bold">
                  <Image
                    src={`/productions/${p.slug}/images/${thumbnail}`}
                    alt={p.title}
                    height={200}
                    width={350}
                  />
                  <div className="text-center">
                    <div>
                      {p.title}
                    </div>
                    <div className="text-white">
                      {p.writer}
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          )})}
      </div>
  </Layout>
)

export async function getStaticProps() {
  const previews = getAllSnippets(['slug', 'title', 'writer', 'images', 'tag'])
  return {
    props: {
      previews: previews,
    }
  }
}

export default Guests
