/* eslint-disable @typescript-eslint/no-explicit-any */
// https://reactnavigation.org/docs/hello-react-navigation
// native will use React-navigation
// we have stack navigation and tab navigation
// NavigationContainer, Stack.Navigator and Stack.Screen
// or Tab.Navigator and Tab.Screen
// prop: navigation is passed into components, used to navigate

import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CategoryScreen, HomeScreen, SettingsScreen } from '../../pages';
import { Text } from '../typography';
import { useNavigation as useNativeNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getCategoryList, getLayout } from '@kaddra-app/management/state';

const Tab = createBottomTabNavigator();

// const Stack = createNativeStackNavigator();
// const StackNavigationWrapper = (name: string, component: any) => {
//   const layout = getLayout();
//   const stacks = getCategoryList();

//   return (
//     <Stack.Navigator>
//       {stacks.map(
//         (value: { category: string; imgUri: string }, index: number) => (
//           <Stack.Screen />
//         )
//       )}
//     </Stack.Navigator>
//   );
// };

const HomeStack = createNativeStackNavigator();

const HomeScreenStack = () => {
  const stacks = getCategoryList();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={'home'}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      {/* {stacks.map(
        (value: { category: string; imgUri: string }, index: number) => (
          <HomeStack.Screen
            name={value.category}
            component={}
            options={{ headerShown: false }}
          />
        )
      )} */}
      <HomeStack.Screen
        name={'category'}
        component={CategoryScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

const Fallback = () => {
  return <Text>404</Text>;
};

const Pages: Record<string, any> = {
  home: HomeScreenStack,
  settings: SettingsScreen,
};

export const AppNavigator: FC<{ routes: any[] }> = ({ routes }) => {
  return (
    <Tab.Navigator>
      {routes.map((route) => (
        <Tab.Screen
          key={route}
          name={`${route}Stack`}
          options={{ headerShown: false }}
          component={Pages[route] ?? Fallback}
        />
      ))}
    </Tab.Navigator>
  );
};

export const useNavigation = () => {
  const navigator = useNativeNavigation();
  const { navigate, reset } = navigator;

  return {
    navigate,
    reset,
    params: () => {
      const { routes } = navigator.getState();
      const params = {};
      routes.forEach((value) => {
        params[value.name] = value.params;
      });
      return params;
    },
  };
};
