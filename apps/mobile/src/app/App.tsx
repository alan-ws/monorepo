import * as React from 'react';
import {
  Center,
  Flex,
  Heading,
  NativeBaseProvider,
  ScrollView,
  useTheme,
  VStack,
} from 'native-base';
import {
  ActionBar,
  Box,
  Category,
  Home,
  Popular,
  RegionalDrop,
  SearchBar,
} from '@kaddra-app/ui';

export default function App() {
  return (
    <NativeBaseProvider>
      <RegionalDrop />
      <ActionBar />
      <SearchBar />
      <Home />
    </NativeBaseProvider>
  );
}
