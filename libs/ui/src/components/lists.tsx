import React from 'react';
import { getCategoryList } from '@kaddra-app/management/state';
import { VStack, ZStack, Text, Box, Flex, Image, View } from 'native-base';

export const Category = () => {
  const categories = getCategoryList();

  return (
    <VStack mt="8">
      {categories.map((value, index) => {
        return (
          <ZStack height="128px" key={`${value.category}_${index}`} mt="2" justifyContent={"center"}>
            <Box height={"128px"} width="100%">
              <Image src={value.imgUri} alt={value.category} height={"128px"} width="100%" />
            </Box>
            <Text ml={"6"} color={"white"} fontSize={"24px"} fontWeight={"bold"}>
              {value.category.replace(/-and-/, " & ")}
            </Text>
          </ZStack>
        );
      })}
    </VStack>
  );
};
