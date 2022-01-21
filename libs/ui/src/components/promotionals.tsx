import React from 'react';
import {
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  ScrollView,
  Text,
  useTheme,
  VStack,
} from 'native-base';
import { Category } from '..';

export const Popular = () => {
  return (
    <VStack>
      <HStack mt="3" mb="4">
        <Heading fontSize="xl">POPULAR</Heading>
      </HStack>
      <VStack flex="1">
        <HStack width="100%" height="128px">
          <Image width="100%" height="128px" src={"https://www.angeljackets.com/uk/product_images/b/192/womens_black_jacket__04442_zoom.jpg"} alt="popular product" />
        </HStack>
        <Text>Faux Leather Jacket</Text>
        <Text>S$ 99</Text>
      </VStack>
    </VStack>
  );
};

export const Main = () => {
  return (
    <ScrollView
      _contentContainerStyle={{
        px: '20px',
        mb: '4',
        minW: '72',
      }}
    >
      <Popular />
      <Category />
    </ScrollView>
  );
};
