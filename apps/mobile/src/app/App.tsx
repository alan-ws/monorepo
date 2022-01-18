import * as React from 'react';
import { NativeBaseProvider, Text } from 'native-base';
import { Calendar } from '@kaddra-app/ui';

export default function App() {
  return (
    <NativeBaseProvider>
      <Text>Calendar</Text>
      <Calendar />
    </NativeBaseProvider>
  );
}
