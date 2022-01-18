import * as React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Box } from '@kaddra-app/ui';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
}
