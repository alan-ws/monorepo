import React, { FC } from 'react';
import { Flex } from '../../base/layout';
import { Text } from '../../base/typography';

const UserName: FC<{ name: string }> = ({ name }) => {
  return (
    <Flex _css="flex-1">
      <Text>{name}</Text>
    </Flex>
  );
};

const Bookmarks: FC<{ bookmarks: string[] }> = ({ bookmarks }) => {
  return (
    <Flex _css="w-32px h-32px">
      <Text>{bookmarks.length}</Text>
    </Flex>
  );
};

export const UserNavBar = () => {
  //   const profile = sliceProfile('initial');
  const profile = {
    name: 'Alan',
    favorites: ['wine', 'champagne'],
    notifications: [1, 2, 3],
  };

  return (
    <Flex _css="w-full row">
      <UserName name={profile.name} />
      <Flex _css="flex-1 justify-end">
        <Bookmarks bookmarks={profile.favorites} />
        <Bookmarks bookmarks={profile.favorites} />
      </Flex>
    </Flex>
  );
};
