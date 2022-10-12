import Layout from '../../components/Layout'
import ImageGallery from '../../components/ImageGallery';
import { getImagesByDirectory } from '../../lib/markdown';

const Home = ({ imagesKosicka, imagesHarold }) => (
  <Layout title="OLDstars > Prostory">
    <h2>Prostory</h2>
    <h3>H2O - Bytové divadlo v Košické</h3>
    <p>Košická 21, Praha 10</p>
    <ImageGallery images={imagesKosicka.map(image => `/oldstars/prostory/kosicka/${image}`)} />
    <p>
      V novém prostoru ve Vršovicích, kde OLDstars sídlí od roku 2018, ctí myšlenku původních bytových divadel. Nabízí jak zázemí pro Herecké studio, tak i nevšední divácký prožitek.
    </p>
    <h4>dopravní dostupnost</h4>
    <ul>
      <li>
        zastávka Ruská - tram č. 22, 13, 4 (ze zastávky 2 minuty pěšky)
      </li>
      <li>
        zastávka Krymská - bus č. 135; tram č. 22, 13, 4 (ze zastávky 4 minuty pěšky)
      </li>
      <li>
        (Z Náměstí míru (metro A) se jede na Ruskou 4 minuty, z I. P. Pavlova (metro C) 7 minut, z Karlova náměstí (metro B) 12 minut.)
      </li>
    </ul>
    <h4>
      nabídka 
    </h4>
    <p>
      WIFI, samoobslužný bar
    </p>
    <h4>
      kontakt
    </h4>
    <p>
      provozní Jakub Brunclík, tel.: +420 607 636 314
    </p>
    <h3>Sklepní prostor HarOLD</h3>
    <p>Charkovská 15, Praha 10</p>
    <ImageGallery images={imagesHarold.map(image => `/oldstars/prostory/harold/${image}`)} />
    <p>
      Sklepní prostor funguje již od založení umělecké skupiny jako divadelní platforma. V současné době slouží jako zkušebna pro soubory Hereckého studia.
    </p>
    <h4>dopravní dostupnost</h4>
    <ul>
      <li>
        zastávka Ruská - tram č. 22, 13, 4 (ze zastávky 3 minuty pěšky)
      </li>
      <li>
        zastávka Krymská - tram č. 22, 13, 4; bus č. 135 (ze zastávky 5 minut pěšky)
      </li>
      <li>
        (Z Náměstí míru (metro A) se jede na Ruskou 4 minuty, z I. P. Pavlova (metro C) 7 minut, z Karlova náměstí (metro B) 12 minut.)
      </li>
    </ul>
    <h4>
      nabídka 
    </h4>
    <p>
      WIFI, samoobslužný bar
    </p>
    <h4>
      kontakt
    </h4>
    <p>
      provozní Jakub Brunclík, tel.: +420 607 636 314
    </p>
    <h3>Werichova vila</h3>
    <p>U Sovových mlýnů 501/7, Praha 1 – Malá Strana</p>
    <p>
      Umělecké centrum Werichova vila je otevřená multikulturní platforma nabízející jak stálé expozice, tak bohatý kulturní program a kreativní workshopy. 
    </p>
  </Layout>
)

export default Home

export async function getStaticProps() {
  const imagesKosicka = getImagesByDirectory('public/oldstars/prostory/kosicka');
  const imagesHarold = getImagesByDirectory('public/oldstars/prostory/harold');
  return {
    props: {
      imagesKosicka: imagesKosicka,
      imagesHarold: imagesHarold,
    },
  }
}

export const config = {
  unstable_excludeFiles: ['public/**/*'],
}
