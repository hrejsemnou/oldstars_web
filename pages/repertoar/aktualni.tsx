import Image from 'next/image';
import Link from 'next/link';

import Layout from '../../components/Layout'
import { getAllSnippets } from '../../lib/markdown'
import styles from './Index.module.scss';

interface Preview {
  slug: string;
  title: string;
  writer: string;
  tag: string;
  images: string[];
}

const Repertoar = ({ previews }: { previews: Preview[] }) => {
  return (
    <Layout title="OLDStars > Repertoár > Aktuální">
      <div className={styles.previews}>
        {previews.filter(item => item.tag !== "guests" && item.tag !== "archive").map(p => {
          const thumbnail = p.images[Math.floor(Math.random() * p.images.length)];
          return (
            <div className={styles.preview} key={p.title}>
              <Link href={`/repertoar/${p.slug}`} key={p.slug}>
                <a className="text-bold">
                  <Image
                    src={`/productions/${p.slug}/images/${thumbnail}`}
                    alt={p.title}
                    objectFit="cover"
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
  );
};

export async function getStaticProps() {
  const previews = getAllSnippets(['slug', 'title', 'writer', 'images', 'tag'])
  return {
    props: {
      previews: previews,
    }
  }
}

export default Repertoar;
