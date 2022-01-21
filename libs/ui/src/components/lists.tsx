import React from 'react';
import { getCategoryList } from '@kaddra-app/management/state';
import {
  VStack,
  ZStack,
  Text,
  Box,
  Flex,
  Image,
  View,
  Pressable,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const CategoryStack = createNativeStackNavigator();

// const SubCategory = () => {
//   return <Text>SUB CATEGORY</Text>
// }

// export const CategoryNavigation = () => {
//   return (
//     <CategoryStack.Navigator>
//       <CategoryStack.Screen
//         name={'category'}
//         options={{ headerShown: false }}
//         component={SubCategory}
//       />
//     </CategoryStack.Navigator>
//   );
// };


export const Category = () => {
  const categories = getCategoryList();
  const navigation = useNavigation();

  return (
    <VStack mt="8">
      {categories.map((value, index) => {
        return (
          <Pressable
            key={`${value.category}_${index}`}
            onPress={() => navigation.navigate('category')}
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

