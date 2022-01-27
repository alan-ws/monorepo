import React from 'react';
import { Flex, Image, Pressable } from 'native-base';
import { useNavigation } from '../native/natigation';

export const Notification = () => {
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

export const Basket = () => {
  const navi = useNavigation();

  return (
    <Pressable onPress={() => navi.navigate('basket', {})}>
      <Image
        src={
          'https://cdns.iconmonstr.com/wp-content/assets/preview/2013/240/iconmonstr-basket-14.png'
        }
        width="8"
        height="8"
        alt="basket"
      />
    </Pressable>
  );
};

export const Bookmark = () => {
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

export const History = () => {
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

export const Search = () => {
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
