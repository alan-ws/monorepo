import React from 'react';
import { Text } from 'native-base';
import { ActionBar, Category, Main, RegionalDrop, SearchBar } from '..';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

const Outlet = () => {
  return (
    <>
      <RegionalDrop />
      <ActionBar />
      <SearchBar />
      <Main />
    </>
  );
};

const Home = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={'homestack'} options={{ headerShown: false }} component={Outlet} />
      <HomeStack.Screen name={'categorystack'} options={{ headerShown: false }} component={Category} />
    </HomeStack.Navigator>
  );
};

export const Pages: Record<string, any> = {
  home: Home,
};

export const Fallback = () => {
  return <Text>404</Text>;
};
