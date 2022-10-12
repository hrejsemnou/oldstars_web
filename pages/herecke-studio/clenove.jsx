import React from 'react';
import Image from 'next/image';

import Layout from '../../components/Layout'
import { getMembers } from '../../lib/markdown';

import styles from './Soubory.module.scss';

const Members = ({ members }) => (
  <Layout title="OLDstars > Herecké studio > Členové">
    <h2>Členové</h2>
    <p>Omlouváme se, na této sekci se pracuje.</p>
    {members.map(member => (
      <React.Fragment key={member.name}>
        <h3>{member.name}</h3>
        <div className={styles.soubor}>
          <div className={styles.souborInfo}>
            <span>
              {member.content}
            </span>
          </div>
        </div>
      </React.Fragment>
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
