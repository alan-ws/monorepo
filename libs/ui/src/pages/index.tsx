import React, { FC, useEffect, useState } from 'react';
import { Box, Flex } from '../base/layout';
import { Text } from '../base/typography';
import { getCategories, getLayout } from '@kaddra-app/management/state';
import { componentLookup } from '../utils';
import { useNavigation } from '..';

export const HomeScreen: FC = () => {
  // we can do state updates and mutations at this layer
  // so that at the components level they can merely retrieve or mutate
  // reducing the amount of requests made at a component level
  // unless we want components to be isolated?
  const schema = getLayout();

  return (
    <Box>
      {schema.home.layout.map((value: string) => {
        if (!componentLookup[value]) return null;
        return componentLookup[value];
      })}
    </Box>
  );
};

export const SettingsScreen: FC = () => {
  const schema = getLayout();

  return (
    <Box>
      {/* {schema.home.layout.map((value: string) => {
        if (!componentLookup[value]) return null;
        return componentLookup[value];
      })} */}
    </Box>
  );
};

export const CategoryScreen: FC = () => {
  const schema = getLayout();
  const navigator = useNavigation();
  const { category } = navigator.params();
  const [categories, setCategories] = useState<string[]>();

  useEffect(() => {
    if (!category) return;
    setCategories(getCategories(category as string));
  }, [category]);

  return (
    <Box>
      {schema.category_list.layout.map((value: string) => {
        if (!componentLookup[value]) return null;
        return componentLookup[value];
      })}
      {categories?.map((value) => (
        <Flex>
          <Text>{value}</Text>
        </Flex>
      ))}
    </Box>
  );
};
