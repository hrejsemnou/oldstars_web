import Image from 'next/image';

import Layout from '../../components/Layout'
import { getMembers } from '../../lib/markdown';

import styles from './Soubory.module.scss';

const Members = ({ members }) => (
  <Layout title="OLDStars > Herecké studio > Členové">
    <h2>Členové</h2>
    <p>Omlouváme se, na této sekci se pracuje.</p>
    {members.map(member => (
      <>
        <h3>{member.name}</h3>
        <div className={styles.soubor}>
          <div>
            <Image
              layout="fixed"
              key="tstanek"
              src={`/members/${member.slug}/images/index.jpg`}
              alt={`${member.slug}-profil`}
              height={135}
              width={240}
            />
          </div>
          <div className={styles.souborInfo}>
            <span>
              {member.content}
            </span>
          </div>
        </div>
      </>
    ))}
  </Layout>
)

export async function getStaticProps() {
  const members = getMembers(['slug', 'name', 'content'])
  return {
    props: {
      members: members,
    }
  }
}

export default Members
