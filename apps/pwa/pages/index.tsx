import React from 'react';
import { ActionBar, Main, RegionalDrop, SearchBar } from '@kaddra-app/ui';
import { Flex } from 'native-base';

export function Index() {
  return <>
    <RegionalDrop />
    <ActionBar />
    <SearchBar />
    <Main />
  </>
}

export default Index;
