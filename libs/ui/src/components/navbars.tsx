import React, { FC } from 'react';
import { getNavigation, getProfile } from '@kaddra-app/management/state';
import { Flex, Text, Image, Input, Pressable } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Fallback, Pages } from '../pages';
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
  const navi = useNavigation();

  return (
    <Pressable onPress={() => navi.navigate('notifcations', {})}>
      <Image
        src={
          'https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-bell-thin.png'
        }
        width="8"
        height="8"
        alt="notification"
      />
    </Pressable>
  );
};

const Bookmark = () => {
  const navi = useNavigation();

  return (
    <Pressable onPress={() => navi.navigate('bookmarks', {})}>
    <Image
      src={
        'https://cdns.iconmonstr.com/wp-content/assets/preview/2013/240/iconmonstr-bookmark-2.png'
      }
      width="8"
      height="8"
      alt="notification"
    />
    </Pressable>
  );
};

const History = () => {
  const navi = useNavigation();

  return (
    <Pressable onPress={() => navi.navigate('history', {})}>
    <Image
      src={
        'https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-time-17.png'
      }
      width="8"
      height="8"
      alt="notification"
    />
    </Pressable>
  );
};

const Search = () => {
  return (
    <Flex width={'10%'}>
      <Image
        src={
          'https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-magnifier-2.png'
        }
        width="8"
        height="8"
        alt="notification"
      />
    </Flex>
  );
};

export const ActionBar: FC = () => {
  const profile = getProfile();

  return (
    <Flex width={'100%'} flexDirection={'row'}>
      <Flex width={'50%'}>
        <Text>Welcome, {profile.name}</Text>
      </Flex>
      <Flex width={'50%'} flexDirection={'row'} justifyContent={'flex-end'}>
        <Notification />
        <Bookmark />
        <History />
      </Flex>
    </Flex>
  );
};

export const SearchBar: FC = () => {
  return (
    <Flex flexDirection={'row'} width={'100%'}>
      <Search />
      <Input mx="3" placeholder="Search" width={'90%'} />
    </Flex>
  );
};

const Tab = createBottomTabNavigator();

export const AppNavigation: FC = () => {
  const routes = getNavigation();

  return (
    <Tab.Navigator>
      {routes.map((route) => (
        <Tab.Screen
          key={route}
          name={`${route.replace(/-and-/, ' & ')}`}
          options={{ headerShown: false }}
          component={Pages[route] ?? Fallback}
        />
      ))}
    </Tab.Navigator>
  );
};
