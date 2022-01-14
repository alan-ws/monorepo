/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { Box } from '../base/layout';
import { Text } from '../base/typography';

export const HomeScreen: FC<{ navigation?: any }> = ({ navigation }) => {
  return (
    <Box>
      <Text>HI FROM MOBILE</Text>
      {/* <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      /> */}
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
