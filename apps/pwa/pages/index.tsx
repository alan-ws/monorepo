import React from 'react';
import { ActionBar, RegionalDrop } from '@kaddra-app/ui';
import { Flex } from 'native-base';

export function Index() {
  return <Flex>
    <RegionalDrop />
    <ActionBar />
  </Flex>
}

export default Index;
