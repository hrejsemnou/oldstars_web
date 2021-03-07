import { AppProps } from 'next/app';

import '../styles/Styles.global.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default App;
