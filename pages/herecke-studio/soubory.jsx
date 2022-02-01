import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import Layout from '../../components/Layout'
import styles from './Soubory.module.scss'

const Home = () => {
  const [expanded, setExpanded] = useState(null);
  return (
    <Layout title="OLDstars > Herecké studio > Soubory">
              <p>
                Celých dosavadních 18 let existence se OLDstars věnují divadelní pedagogice. Studenti jsou pro každý semestr zařazeni v jednotlivých (převážně generačních) týmech, kde se s garancí lektorů intenzivně věnují přípravě konkrétních divadelních projektů. Členové Hereckého studia se v rámci celé skupiny věnují nejen činohernímu herectví, ale také režii, scénografii, light designu a práci v technickém zázemí divadla, produkci a PR, tvorbě scénické hudby, fundraisingu, grafice, žurnalistice, a v rámci nadsouborových projektů - zejména festivalů a turné - rovněž produkci.
              </p>
      <h2>Pedagogické vedení</h2>
      <>      
        <a onClick={() => expanded === 0 ? setExpanded(null) : setExpanded(0)}>
          <h3 className={styles.header}>
            <FontAwesomeIcon icon={expanded === 0 ? faCaretDown : faCaretRight} />
            <span>
              Tomáš Staněk
            </span>
          </h3>
        </a>  
        {expanded === 0 ? (
          <>  
            <div className={styles.soubor}>
              <div>
                <Image
                  layout="fixed"
                  key="tstanek"
                  src="/no-image.png"
                  alt="tomas-stanek-foto"
                  height={135}
                  width={240}
                />
              </div>
              <div className={styles.souborInfo}>
                <span className="text-bold">Kontakt:</span>
                <span>tel: +420 606 865 237</span>
                <span>e-mail: <a href="mailto:tomas.stanek@oldstars.cz">tomas.stanek@oldstars.cz</a></span>
              </div>
            </div>
            <h4>Krátké info:</h4>
              <strong>Dětství a DRDS</strong>
              <p>
                Již v útlém dětství mu členství v Dismanově rozhlasovém dětském souboru pomohlo sbírat první zkušenosti a orientaci v kulturní sféře. Prostřednictvím DRDS mu bylo umožněno účinkování v mnohých rozhlasových hrách (rež. Weinlich, Kofránková, Rusko, Gromov, Jahodová....), televizních inscenacích a seriálech (rež.: Kepka, Vorlíček, Simonová....). Za dětský herecký výkon byl opakovaně oceněn na festivalu Prix Bohemia Radio. Účastnil natáčení a moderování publicistických rozhlasových pořadů pro stanici ČRo2-Praha, které v té době DRDS zajišťoval ("Káva u Dismanů", "Dismančata uvádějí....", spolupráce s pořadem "Domino").
              </p>
              <p><strong>Konzervatoř a herectví</strong></p>
              <p>
                Logickým pokračováním zájmů bylo přijetí na hudebně dramatické oddělení Pražské Konzervatoře. Ročníkovými pedagogy mu byli přední pražští herci: Gabriela Vránová a Ivan Řezáč. Po maturitě a absolventských rolích v Žižkovském divadle (Beaumarchaise "Figarova Svatba" rež. Svojtka, Schnitzler "Anatol" rež. Kepka) si v jedné sezoně vyzkoušel členství v Mimickém sboru Divadla Na Vinohradech (V.Korner "Psí kůže" rež. Deak) a hostování v Divadle Na Zábradlí (G.Tabori "Vídeňský řízek" rež. Pokorný).
              </p>
              <p><strong>DAMU</strong></p>
              <p>
                V roce 2005 (pod pedagogickým vedením Mgr. Doubravky Svobodové a JUDr. Jiřího Srstky) ukončil bakalářské studium oboru divadelní produkce na Akademii múzických umění v Praze. Se spolužáky z DAMU připravoval festival nezávislého openair divadla "VyšeHrátky".
              </p>
              <p><strong>Spolupráce s Českým rozhlasem</strong></p>
              <p>
                Po absolvování stáže ve tvůrčí skupině elévů Mgr. Miluše Tikalové od roku 2002 spolupracoval s ČRo3 - Vltavou, především jako redaktor a moderátor publicistického pořadu Čajovna. S kolegyní Kateřinou Rathouskou pro Vltavu napsali a režírovali původní hodinovou rozhlasovou detektivní hru "Silvestr v Čajovně". Nepravidelně přispíval články do Týdeníku Rozhlas. V roce 2006 působil jako redaktor zpravodajství na Českém Rozhlase - Regina.
              </p>
              <p><strong>Pedagogická činnost</strong></p>
              <p>
                Od roku 2000 se podílel jako asistent na vedení dětí v Dismanově rozhlasovém dětském souboru. V roce 2004 spolupracoval jako pedagog s Haf studiem Hany Francové a Gymnáziem Na Vítězné Pláni, kde vyučoval rétoriku a základy mediální komunikace.
              </p>
              <p><strong>Moderování, dabing, komunikace</strong></p>
              <p>
                Věnuje se dabingu a moderování kulturních akcí a plesů. Spolupracoval na projektu "Tramtárie" při moderování nedělních zábavních odpolední pro děti. Spolupracoval s několika firmami a projekty jako konzultant interní i externí komunikace.
              </p>
              <p><strong>ART ZERO a SCENA.CZ</strong></p>
              <p>
                Je členem správní rady neziskové organizace ART ZERO, o.p.s., jejímž cílem je podpora mladých umělců a jejich projektů. Je předsedou správní rady obecně prospěšné společnosti SCENA.cz.
              </p>
              <p><strong>Národní divadlo</strong></p>
              <p>
                Od divadelní sezony 2006/2007 pracuje jako tiskový mluvčí v Národním divadle. Je členem Výboru Mecenášského klubu ND.
              </p>
              <p><strong>OLDstars</strong></p>
              <p>
                Společně s Danielou Ouhrabkovou - Von Vorst, Terezou Tobiášovou a Zuzanou Malou - Horákovou založil v roce 2002 nezávislou uměleckou skupinu OLDstars, kterou vede dodnes…
              </p>
            </>
          ) : null}
        </>
      <>
        <a onClick={() => expanded === 1 ? setExpanded(null) : setExpanded(1)}>
          <h3 className={styles.header}>
            <FontAwesomeIcon icon={expanded === 1 ? faCaretDown : faCaretRight} />
            <span>
              MgA. Zuzana Horáková
            </span>
          </h3>
        </a>
        {expanded === 1 ? (
          <>
            <div className={styles.soubor}>
              <div>
                <Image
                  layout="fixed"
                  key="zhorakova"
                  src="/no-image.png"
                  alt="zuzana-horakova-foto"
                  height={135}
                  width={240}
                />
              </div>
              <div className={styles.souborInfo}>
                <span className="text-bold">Kontakt:</span>
                <span>tel: +420 723 607 104</span>
                <span>e-mail: <a href="mailto:zuzana.horakova@oldstars.cz">zuzana.horakova@oldstars.cz</a></span>
              </div>
            </div>
            <h4>Krátké info:</h4>
            <p>
              Byla členem Dismanova rozhlasového dětského souboru, kde později působila jako asistent vedení. Vystudovala DAMU. Pracuje jako pedagog volného času, pořádá kurzy, programy, tábory, akce. Od r. 2002 se intenzivně věnuje inscenační tvorbě a divadelní práci s dětmi, teenagery, studenty i dospělými. Spolu s Jakubem Štěpánem tvoří tandem LEDÁRNY (www.ledarny.cz) a věnuje se performanci v industriálním a veřejném prostoru. Je napojena na gotický klášter v Roudnici nad Labem, pracuje na jeho otevření veřejnosti a kulturním akcím.
            </p>
          </>
        ): null}
      </>
      <>
        <a onClick={() => expanded === 2 ? setExpanded(null) : setExpanded(2)}>
          <h3 className={styles.header}>
            <FontAwesomeIcon icon={expanded === 2 ? faCaretDown : faCaretRight} />
            <span>
              MgA. Jan Horák
            </span>
          </h3>
        </a>
        {expanded === 2 ? (
          <>
            <div className={styles.soubor}>
              <div>
                <Image
                  layout="fixed"
                  key="jhorak"
                  src="/no-image.png"
                  alt="jan-horak-foto"
                  height={135}
                  width={240}
                />
              </div>
              <div className={styles.souborInfo}>
                <span className="text-bold">Kontakt:</span>
                <span>tel: +420 723 272 013</span>
                <span>e-mail: <a href="mailto:jan.horak@oldstars.cz">jan.horak@oldstars.cz</a></span>
              </div>
            </div>
            <h4>Krátké info:</h4>
            <p>
              Vystudoval činoherní herectví na DAMU. Jeho hereckými pedagogy byli Jaroslava Adamová, Věra Galatíková a Ladislav Mrkvička.

Od roku 2007 do 2013 působil ve Slováckém divadle v Uherském Hradišti (www.slovackedivadlo.cz). Angažmá ukončil po přestěhování do Roudnice nad Labem, od té doby je hercem na volné noze. Spolupracuje na nezávislých projektech nebo vytváří vlastní (www.jan-horak.cz). S OLDstars spolupracuje od roku 2013.
            </p>
          </>
        ) : null}
      </>
      <>
        <a onClick={() => expanded === 3 ? setExpanded(null) : setExpanded(3)}>
          <h3 className={styles.header}>
            <FontAwesomeIcon icon={expanded === 3 ? faCaretDown : faCaretRight} />
            <span>
              MgA. Daniela (Ouhrabková) Von Vorst
            </span>
          </h3>
        </a>
        {expanded === 3 ? (
          <>
            <div className={styles.soubor}>
              <div>
                <Image
                  layout="fixed"
                  key="dvonvorst"
                  src="/no-image.png"
                  alt="daniela-von-vorst-foto"
                  height={135}
                  width={240}
                />
              </div>
              <div className={styles.souborInfo}>
                <span className="text-bold">Kontakt:</span>
                <span>tel: +420 603 796 996</span>
                <span>e-mail: <a href="mailto:daniela.ouhrabkova@oldstars.cz">daniela.ouhrabkova@oldstars.cz</a></span>
              </div>
            </div>
            <h4>Krátké info:</h4>
            <p>
              V roce 2002 se spolu s několika dalšími absolventy DRDS - Tomášem, Terezou a Zuzkou - osamostatnili a založili nezávislou uměleckou skupinu OLDstars. Danka byla v době studia herectví na pražské Konzervatoři také asistentkou v DRDS. Potom zamířila na JAMU do Ateliéru divadla a výchovy. Sbírala zkušenosti také na mezinárodních workshopech, při studiu v Berlíně či na stáži v divadle Maxim Groki Theater. Po několika sezonách v Ateliéru Švandova divadla a magisterském studiu na Katedře výchovné dramatiky na DAMU odjela na pět let do Hamburku objevovat nové umělecké formáty. Touha nadchnout ostatní pro divadlo ji však naštěstí neopustila, a tak se po návratu stala divadelní lektorkou v Národním divadle, kde vede tvůrčí dílny, workshopy a doprovodné akce, je předsedkyní rady Asociace divadelních lektorů a opět působí i v OLDstars! Pod jejím režijním vedení byly u nás uvedeny například inscenace Norway.today (I. Bauersima), úspěšný Tschick (W. Herrndorf, R. Koall) či autorská koláž Google generace. Naposledy to byla Bílá nemoc uvedená na letošním ročníku benefičního festivalu v rámci online bloku.
            </p>
          </>
        ) : null}
      </>
      <>
        <a onClick={() => expanded === 4 ? setExpanded(null) : setExpanded(4)}>
          <h3 className={styles.header}>
            <FontAwesomeIcon icon={expanded === 4 ? faCaretDown : faCaretRight} />
            <span>Eva Sinkovičová</span>
          </h3>
        </a>
        {expanded === 4 ? (
          <>
            <div className={styles.soubor}>
              <div>
                <Image
                  layout="fixed"
                  key="esinkovicova"
                  src="/no-image.png"
                  alt="eva-sinkovicova-foto"
                  height={135}
                  width={240}
                />
              </div>
              <div className={styles.souborInfo}>
                <span className="text-bold">Kontakt:</span>
                <span>e-mail: <a href="mailto:eva@oldstars.cz">eva@oldstars.cz</a></span>
              </div>
            </div>
          </>
        ) : null}
      </>
      <>
        <a onClick={() => expanded === 5 ? setExpanded(null) : setExpanded(5)}>
          <h3 className={styles.header}>
            <FontAwesomeIcon icon={expanded === 5 ? faCaretDown : faCaretRight} />
            <span>Barbora Waschingerová</span>
          </h3>
        </a>
        {expanded === 5 ? (
          <>
            <div className={styles.soubor}>
              <div>
                <Image
                  layout="fixed"
                  key="bwaschingerova"
                  src="/no-image.png"
                  alt="bara=waschingerova-foto"
                  height={135}
                  width={240}
                />
              </div>
              <div className={styles.souborInfo}>
                <span className="text-bold">Kontakt:</span>
                <span>e-mail: <a href="mailto:bara@oldstars.cz">bara@oldstars.cz</a></span>
              </div>
            </div>
          </>
        ) : null}
      </>
      <br />
      <h4>
        <a href="/documents/Závazná_přihláška_OLDstars.pdf" download>Přihláška do Hereckého studia OLDstars</a>
      </h4>
      <h4>
        Spolupracovali s námi:
      </h4>
      <ul>
        <li>Martin Satoranský</li>
        <li>Mgr. Marcela Magdová</li>
        <li>MgA. Kateřina Mikanová</li>
        <li>Veronika Kastlová</li>
        <li>Madla Rutová</li>
        <li>Aška Košťálová Luhanová</li>
        <li>Adam Rut</li>
        <li>Anna Hrnečková</li>
        <li>Jiří Konvalinka</li>
        <li>MgA. Ondřej Novotný</li>
      </ul>
    </Layout>
  )
}

export default Home
