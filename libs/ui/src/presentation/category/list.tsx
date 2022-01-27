import React from 'react';
import { getCategoryList } from '@kaddra-app/management/state';
import { Image, Text, Pressable, VStack, ZStack, Box } from 'native-base';
import { useNavigation } from '../../native/natigation';

export const CategoryList = () => {
  const categories = getCategoryList();
  const navigation = useNavigation();

  return (
    <VStack mt="8">
      {categories.map((value, index) => {
        return (
          <Pressable
            key={`${value.category}_${index}`}
            onPress={() => navigation.navigate('category', value.category)}
          >
            <ZStack
              height="128px"
              key={`${value.category}_${index}`}
              mt="2"
              justifyContent={'center'}
            >
              <Box height={'128px'} width="100%">
                <Image
                  src={value.imgUri}
                  alt={value.category}
                  height={'128px'}
                  width="100%"
                />
              </Box>
              <Text
                ml={'6'}
                color={'white'}
                fontSize={'24px'}
                fontWeight={'bold'}
              >
                {value.category.replace(/-and-/, ' & ')}
              </Text>
            </ZStack>
          </Pressable>
        );
      })}
    </VStack>
  );
};
