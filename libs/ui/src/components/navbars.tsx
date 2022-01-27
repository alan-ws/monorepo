import React, { FC } from 'react';
import { getProfile } from '@kaddra-app/management/state';
import { Flex, Text, Input, Button } from 'native-base';
import { Bookmark, Notification, Search, History } from './icons';

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

export const Filter = () => {
  const filters = ['all', 'ar lenoble', 'collect', 'krug', 'moet'];

  return (
    <Flex flexDirection={'row'}>
      <Button>menu</Button>
      {filters.map((value: string, index: number) => (
        <Button key={index} onPress={() => console.log(value)}>{value}</Button>
      ))}
    </Flex>
  );
};
