import Link from "next/link";

import Layout from "../components/Layout";

const Home = () => (
  <Layout title="OLDstars > Kontakty">
    <h2>OLDSTARS z.s., umělecká skupina</h2>
    <h3>Kde nás najdete?</h3>
    <p>H2O - bytové divadlo v Košické: Košická 21, Praha 10</p>
    <h3>Sídlo</h3>
    <p> Fakturační a korespondenční adresa: Žižkova brána 618/14 Kutná Hora, 284 01</p>
    <p>IČO: 266 755 79</p>
    <p>DIČ: CZ 266 755 79</p>
    <p>Bankovní spojení: Raiffeisenbank - 181 754 2001/5500</p>
    <br />
    <p>Zapsáno v rejstříku Městského soudu v Praze oddíl L, vložka 15028</p>
    <p>
      Živnostenské oprávnění vydáno Městskou částí Praha 17 pod č.j.:
      ŽIO-28/0434/05/Ne
    </p>
    <div>
      <a href="https://www.youtube.com/user/OLDstarsHarOLD">
        OLDstars Youtube kanál
      </a>
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
      <a href="https://www.instagram.com/dstudio_oldstars/">
        D Studio Instagram
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/oldstarsontheroad">
        OLDstars on the ROAD Facebook
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/oldstarsontheroud">
        Festival studentských divadel v Celetné Facebook
      </a>
    </div>
    <br />

    <p>
      <strong>OLDstars: </strong>
      <a href="mailto:tomas.stanek@oldstars.cz">tomas.stanek@oldstars.cz</a>,
      +420 606 865 237
    </p>

    <p>
      <strong>Produkce a PR projektů: </strong>Jiří Dejl,{" "}
      <a href="mailto:jiri.dejl@oldstars.cz">jiri.dejl@oldstars.cz</a>, Karolína
      Hartmanová,{" "}
      <a href="mailto:karolina.hartmanova@oldstars.cz">
        karolina.hartmanova@oldstars.cz
      </a>
    </p>
    <p>
      <strong>Marketing, PR OLDstars: </strong>Klára Vaňkátová,{" "}
      <a href="mailto:klara.vankatova@oldstars.cz">
        klara.vankatova@oldstars.cz
      </a>
      , +420 773 665 680
    </p>
    <p>
      <strong>Agentura: </strong>
      <a href="mailto:matej.zahajsky@oldstars.cz">
        matej.zahajsky@oldstars.cz
      </a>
      , +420 602 371 223
    </p>
    <p>
      <a href="/documents/Závazná_přihláška_OLDstars.pdf" download>
        Přihláška do Hereckého studia OLDstars
      </a>
    </p>
    <Link legacyBegavior href="/dokumenty">
      <a>Oficiální dokumenty</a>
    </Link>
  </Layout>
);

export default Home;
