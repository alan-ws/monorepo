import { AppProps } from 'next/app';
import { NativeBaseProvider } from 'native-base';
import { AppNavigation } from '@kaddra-app/ui';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider>
      <Component {...pageProps} />
      <AppNavigation />
    </NativeBaseProvider>
  );
}

export default MyApp;
