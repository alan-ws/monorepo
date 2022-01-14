/* eslint-disable @typescript-eslint/no-explicit-any */
// https://reactnavigation.org/docs/hello-react-navigation
// native will use React-navigation
// we have stack navigation and tab navigation
// NavigationContainer, Stack.Navigator and Stack.Screen
// or Tab.Navigator and Tab.Screen
// prop: navigation is passed into components, used to navigate

import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, SettingsScreen } from '../../pages';
import { Text } from '../typography';

const Pages: Record<string, any> = {
  home: HomeScreen,
  settings: SettingsScreen,
};

const Tab = createBottomTabNavigator();

const Fallback = () => {
  return <Text>404</Text>;
};

export const AppNavigator: FC<{routes: any[]}> = ({routes}) => {
  return <Tab.Navigator>
    {routes.map((route) => <Tab.Screen key={route} name={route} component={Pages[route] ?? Fallback} />)}
  </Tab.Navigator>;
}
