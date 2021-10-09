import Image from 'next/image';

import Layout from '../../components/Layout'
import styles from './Soubory.module.scss'

const Home = () => (
  <Layout title="OLDStars > Herecké studio > Soubory">
    <h2>Režijní vedení</h2>
    <h3>Tomáš Staněk</h3>
    <div className={styles.soubor}>
      <div>
        <Image
          layout="fixed"
          key="tstanek"
          src="/productions/verim-a-nenavidim/images/1.jpg"
          alt="tomas-stanek-foto"
          height={135}
          width={240}
        />
      </div>
      <div className={styles.souborInfo}>
        <span className="text-bold">Kontakt:</span>
        <span>tel: 777666555</span>
        <span>e-mail: random@slova.com</span>
        <span className={`text-bold ${styles.kratkeInfo}`}>Krátké info:</span>
        <span>Ahoj svete, ja jsem kratke info pro tuto sekci. Doufam ze se mate krasne, protoze ja jo!</span>
      </div>
    </div>
    <h3>Zuzana Horáková</h3>
    <div className={styles.soubor}>
      <div>
        <Image
          layout="fixed"
          key="zhorakova"
          src="/productions/verim-a-nenavidim/images/1.jpg"
          alt="zuzana-horakova-foto"
          height={135}
          width={240}
        />
      </div>
      <div className={styles.souborInfo}>
        <span className="text-bold">Kontakt:</span>
        <span>tel: 777666555</span>
        <span>e-mail: random@slova.com</span>
        <span className={`text-bold ${styles.kratkeInfo}`}>Krátké info:</span>
        <span>Ahoj svete, ja jsem kratke info pro tuto sekci. Doufam ze se mate krasne, protoze ja jo! Ahoj svete, ja jsem kratke info pro tuto sekci. Doufam ze se mate krasne, protoze ja jo! Ahoj svete, ja jsem kratke info pro tuto sekci. Doufam ze se mate krasne, protoze ja jo! Ahoj svete, ja jsem kratke info pro tuto sekci. Doufam ze se mate krasne, protoze ja jo!</span>
      </div>
    </div>
  </Layout>
)

export default Home
