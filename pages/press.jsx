import Link from 'next/link';

import Layout from '../components/Layout'

const Home = () => (
  <Layout title="OLDstars > Press">
    <h2>Informace pro novináře</h2>
    <p>
      <a href="mailto:press@oldstars.cz">press@oldstars.cz</a>
    </p>
    <p>
      +420 606 865 237
    </p>
    <p>
      <strong>PR OLDstars: </strong>Nicol Hrabovská, <a href="mailto:nicol@oldstars.cz">nicol@oldstars.cz</a>, +420 773 695 561
    </p>
    <p>
      <strong>PR projektů: </strong>Klára Vaňkátová, <a href="mailto:klara.vankatova@oldstars.cz">klara.vankatova@oldstars.cz</a>, +420 733 665 680
    </p>
    <Link href="/loga">
      <a>
        Loga a bannery ke stažení
      </a>
    </Link>
    <h2>Tiskové zprávy</h2>
    <p>
      <a href="/tiskovky/TZ_-_Festival_studentskeho_divadla_v_Celetne_2019.pdf" download>TZ Festival studentského divadla v Celetné 2019</a>
    </p>
    <p>
      <a href="/tiskovky/TZ_OLDstars_on_the_ROUD_2019.pdf" download>TZ benefičního festivalu OLDstars on the Roud 2019</a>
    </p>
    <p>
      <a href="/tiskovky/TZ-NIKDY-OLDstars_bytové_divadlo_kosicka.pdf" download>TZ inscenace NIKDY se stěhuje do bytového divadla v Košické</a>
    </p>
    <p>
      <a href="/tiskovky/TZ_festival_studentského_divadla_Celetná_2018.pdf" download>TZ Festival studentských divadel v Divadle v Celetne 2018</a>
    </p>
    <p>
      <a href="/tiskovky/TZ_OLDstars_se_vrací_z_Žižkova_do_Vršovic_2018.pdf" download>TZ OLDstars se vrací ze Žižkova do Vršovic 2018</a>
    </p>
    <h2>Monitoring mediálních výstupů</h2>
    <p>Omlouváme se, na této sekci se pracuje</p>
  </Layout>
)

export default Home
