import React, { ReactNode } from 'react'
import Head from 'next/head'

import Header from '../components/Header';
import Footer from '../components/Footer';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Divadlo OLDstars' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <hr />
    <main className="text-white">
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout;
