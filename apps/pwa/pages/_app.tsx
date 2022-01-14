import { Navigation } from '@kaddra-app/ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to pwa!</title>
      </Head>

      <main className="app">
        <Component {...pageProps} />
      </main>

      <Navigation />
    </>
  );
}

export default CustomApp;
