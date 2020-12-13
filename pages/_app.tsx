import Link from 'next/link'

import Layout from '../components/Layout'
import '../styles/Styles.global.scss';

const App = () => (
  <Layout title="Divadlo OLDstars">
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default App;
