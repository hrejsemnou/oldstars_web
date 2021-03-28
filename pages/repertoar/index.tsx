import Layout from '../../components/Layout'
import { getAllSnippets } from '../../lib/markdown'

interface Preview {
  title: string;
  writer: string;
}

const Repertoar = ({ previews }: { previews: Preview[] }) => {
  console.log(previews);
  return (
    <Layout title="Repertoár">
      {previews.map(p => <div key={p.title}>{p.title}</div>)}
    </Layout>
  );
};

export async function getStaticProps() {
  const previews = getAllSnippets(['title', 'writer'])
  return {
    props: {
      previews: previews,
    }
  }
}

export default Repertoar;
