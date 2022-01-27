import * as React from 'react';
import {
  NativeBaseProvider,
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from '@kaddra-app/ui';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
