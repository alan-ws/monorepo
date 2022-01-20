import * as React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Box, RegionalDrop } from '@kaddra-app/ui';

export default function App() {
  return (
    <NativeBaseProvider>
      <RegionalDrop />
    </NativeBaseProvider>
  );
}
