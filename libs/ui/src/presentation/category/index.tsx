import React from 'react';
import { Button, VStack } from 'native-base';
import { RegionalDrop } from '../../components/dropdowns';
import { useNavigation } from '../../native/natigation';

export const Category = () => {
  const navigation = useNavigation();
  const categories = ['wine', 'champagne', 'spirits & wine'];

  return (
    <>
      <RegionalDrop />
      <Button _web={{display: 'none'}} onPress={() => navigation.goBack()}>Back</Button>
      <VStack>
        {categories.map((value, index) => (
          <Button key={`${value}_${index}`} onPress={() => navigation.replace('/product', value)}>
            {value}
          </Button>
        ))}
      </VStack>
    </>
  );
};
