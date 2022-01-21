import * as React from 'react';
import {
  NativeBaseProvider,
} from 'native-base';
import { AppNavigation } from '@kaddra-app/ui';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <AppNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
