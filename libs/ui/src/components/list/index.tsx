import React, { FC } from 'react';
import { getCategoryList } from '@kaddra-app/management/state';
import { Flex } from '../../base/layout';
import { Text } from '../../base/typography';
import { useNavigation } from '../../base/navigation';

export const CategoryList: FC = () => {
  const navigation = useNavigation();
  const categories = getCategoryList();

  return (
    <Flex _css="flex-col">
      {categories.map(
        (value: { category: string; imgUri: string }, index: number) => {
          return (
            <Flex
              key={`${value.category}_${index}`}
              onpress={() => navigation.navigate('category', value.category)}
            >
              <Text>{value.category}</Text>
            </Flex>
          );
        }
      )}
    </Flex>
  );
};
