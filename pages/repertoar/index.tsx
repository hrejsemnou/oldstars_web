import Image from 'next/image';
import Link from 'next/link';

import Layout from '../../components/Layout'
import { getAllSnippets } from '../../lib/markdown'

interface Preview {
  slug: string;
  title: string;
  writer: string;
  images: string[];
}

const Repertoar = ({ previews }: { previews: Preview[] }) => {
  return (
    <Layout title="Repertoár">
      {previews.map(p => {
        const thumbnail = p.images[Math.floor(Math.random() * p.images.length)];
        return (
          <Link href={`/repertoar/${p.slug}`} key={p.slug}>
            <a>
              <Image
                src={`/productions/${p.slug}/images/${thumbnail}`}
                alt={p.title}
                height={150}
                width={250}
              />
              <div>
                {p.title}
              </div>
              <div>
                {p.writer}
              </div>
            </a>
          </Link>
        )})}
    </Layout>
  );
};

export async function getStaticProps() {
  const previews = getAllSnippets(['slug', 'title', 'writer', 'images'])
  return {
    props: {
      previews: previews,
    }
  }
}

export default Repertoar;
