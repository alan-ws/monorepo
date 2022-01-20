import { getProfile } from '@kaddra-app/management/state';
import { Flex, Text, Image } from 'native-base';
import React, { FC } from 'react';
import 

const Bookmark = () => {
  return (
    <Image
      source={{
        uri: 'https://wallpaperaccess.com/full/317501.jpg',
      }}
      alt="Alternate Text"
      size="xl"
    />
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
        <Text>Fesafes</Text>
        <Bookmark />
        <Text>Fesafes</Text>
      </Flex>
    </Flex>
  );
};
