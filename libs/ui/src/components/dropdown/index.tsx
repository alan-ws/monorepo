import React from 'react';
import { Dropdown } from '../../composed/dropdown';

export const RegionDropdown = () => {
  const regions = ['singapore', 'hong kong'];
  return <Dropdown content={regions} />;
};
