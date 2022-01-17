import React from 'react';
import { Popular } from './components/banner';
import { RegionDropdown } from './components/dropdown';
import { CategoryList } from './components/list';
import { UserNavBar } from './components/navbar';
import { Search } from './components/search';

export type Components = 'region_dropdown';
export const componentLookup: Record<string, any> = {
  region_dropdown: <RegionDropdown />,
  user_nav: <UserNavBar />,
  search: <Search />,
  popular: <Popular />,
  category_list: <CategoryList />,
};
