import { getRegions } from '@kaddra-app/management/state';
import { Select, VStack } from 'native-base';
import React, { FC, useState } from 'react';

export const RegionalDrop: FC = () => {
  const [region, setRegion] = useState<string>();

  const regions = getRegions();
  return (
    <VStack>
      <Select
        placeholder="Region"
        selectedValue={region}
        onValueChange={(itemValue) => setRegion(itemValue)}
      >
        {regions.map((value: string, index: number) => {
          return (
            <Select.Item
              key={`${value}_${index}`}
              label={value}
              value={value}
            />
          );
        })}
      </Select>
    </VStack>
  );
};
