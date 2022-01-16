/* eslint-disable @typescript-eslint/no-explicit-any */
import { getLayout } from '@kaddra-app/management/state';
import React, { FC } from 'react';
import { Box } from '../base/layout';
import { Text } from '../base/typography';
import { componentLookup } from '../utils';

export const HomeScreen: FC<{ navigation?: any }> = ({ navigation }) => {
  const content = ['hi', 'there', 'we'];
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

// keep a wrapper for navigation for react-native and compose the internals of the pages
export const SettingsScreen: FC<{ navigation?: any }> = ({ navigation }) => {
  return (
    <Box>
      <Text>Settings!</Text>
      {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
    </Box>
  );
};
