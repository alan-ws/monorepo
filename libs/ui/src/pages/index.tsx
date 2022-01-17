import React, { FC } from 'react';
import { Box } from '../base/layout';
import { Text } from '../base/typography';
import { getLayout } from '@kaddra-app/management/state';
import { componentLookup } from '../utils';

export const HomeScreen: FC = () => {
  // we can do state updates and mutations at this layer
  // so that at the components level they can merely retrieve or mutate
  // reducing the amount of requests made at a component level
  // unless we want components to be isolated?
  const schema = getLayout();

  return (
    <Box>
      {schema.home.layout.map((value: string) => {
        if (!componentLookup[value]) return null;
        return componentLookup[value];
      })}
    </Box>
  );
};

export const SettingsScreen: FC = () => {
  const schema = getLayout();

  return (
    <Box>
      {/* {schema.home.layout.map((value: string) => {
        if (!componentLookup[value]) return null;
        return componentLookup[value];
      })} */}
    </Box>
  );
};

export const CategoryScreen: FC = () => {
  return <Box>
    <Text>Category</Text>
  </Box>
}
