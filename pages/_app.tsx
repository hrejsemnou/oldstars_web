import { AppProps } from 'next/app';
import Script from 'next/script';

import '../styles/Styles.global.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`} />
      <Script strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default App;
