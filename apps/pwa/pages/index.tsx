import React from 'react';
import { ActionBar, Home, RegionalDrop, SearchBar } from '@kaddra-app/ui';
import { Flex } from 'native-base';

export function Index() {
  return <>
    <RegionalDrop />
    <ActionBar />
    <SearchBar />
    <Home />
  </>
}

export default Index;
