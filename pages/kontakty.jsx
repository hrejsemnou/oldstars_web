import Link from 'next/link';

import Layout from '../components/Layout'

const Home = () => (
  <Layout title="OLDStars > Kontakty">
    <h2>OLDSTARS z.s., umělecká skupina</h2>
    <h3>Sídlo</h3>
    <p>Fakturační a korespondenční adresa: Charkovská 15, Praha 10</p>
    <p>IČO: 266 755 79</p>
    <p>DIČ: CZ 266 755 79</p>
    <p>Bankovní spojení: Raiffeisenbank - 181 754 2001/5500</p>
    <br />
    <p>Zapsáno v rejstříku Městského soudu v Praze oddíl L, vložka 15028</p>
    <p>Živnostenské oprávnění vydáno Městskou částí Praha 17 pod č.j.: ŽIO-28/0434/05/Ne</p>
    <div>
      <a href="https://www.youtube.com/user/OLDstarsHarOLD">OLDstars Youtube kanál</a>
    </div>
    <div>
      <a href="https://www.facebook.com/skupinaOLDstars">OLDstars Facebook</a>
    </div>
    <div>
      <a href="https://www.instagram.com/oldstars.cz/">OLDstars Instagram</a>
    </div>
    <div>
      <a href="https://www.facebook.com/DstudioOLDstars">D Studio Facebook</a>
    </div>
    <div>
      <a href="https://www.instagram.com/dstudio_oldstars/">D Studio Instagram</a>
    </div>
    <div>
      <a href="https://www.facebook.com/oldstarsontheroud">OLDstars on the ROUD Facebook</a>
    </div>
    <div>
      <a href="https://www.facebook.com/oldstarsontheroud">Festival studentských divadel v Celetné Facebook</a>
    </div>
    <br />
    <p>
      <strong>Agentura: </strong><a href="mailto:stanislava.lojkova@oldstars.cz">stanislava.lojkova@oldstars.cz</a>, +420 739 339 367
    </p>
    <p>
      <strong>OLDstars: </strong><a href="mailto:tomas.stanek@oldstars.cz">tomas.stanek@oldstars.cz</a>, +420 606 865 237
    </p>
    <p>
      <strong>Herecké studio OLDstars: </strong><a href="mailto:zuzana.mala@oldstars.cz">zuzana.mala@oldstars.cz</a>, +420 723 607 104
    </p>
    <p>
      <strong>Dětské studio OLDstars: </strong><a href="mailto:eva@oldstars.cz">eva@oldstars.cz</a>, <a href="mailto:bara@oldstars.cz">bara@oldstars.cz</a>
    </p>
    <p>
      <strong>Bytové divadlo v Košické: </strong>Jakub Brunclík, <a href="mailto:bruncjakub@gmail.com">bruncjakub@gmail.com</a>, +420 607 636 314
    </p>
    <p>
      <strong>Produkce projektů: </strong>Elisa Speváková, <a href="mailto:elisa.spevakova@gmail.com">elisa.spevakova@gmail.com</a>
    </p>
    <p>
      <strong>PR projektů: </strong>Klára Vaňkátová, <a href="mailto:klara.vankatova.kv@seznam.cz">klara.vankatova.kv@seznam.cz</a>
    </p>
    <p>
      <strong>Marketing, PR OLDstars: </strong><a href="mailto:nicol@oldstars.cz">nicol@oldstars.cz</a>
    </p>
    <p>
      <a href="/documents/Zavazna_prihlaska.pdf" download>Přihláška do hereckého studia</a>
    </p>
    <Link href="/dokumenty">
      <a>
        Oficiální dokumenty
      </a>
    </Link>
  </Layout>
)

export default Home
