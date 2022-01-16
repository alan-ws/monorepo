import React from 'react';
import { RegionDropdown } from './components/dropdown';
import { UserNavBar } from './components/navbar';
import { Search } from './components/search';

export type Components = 'region_dropdown';
export const componentLookup: Record<string, any> = {
  region_dropdown: <RegionDropdown />,
  user_nav: <UserNavBar />,
  search: <Search />,
};
