import { AppProps } from 'next/app';
import { NativeBaseProvider } from 'native-base';
import { AppNavigation } from '@kaddra-app/ui';
import { Provider } from 'react-redux';
import { store } from '@kaddra-app/state';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Component {...pageProps} />
        <AppNavigation />
      </NativeBaseProvider>
    </Provider>
  );
}

export default MyApp;
