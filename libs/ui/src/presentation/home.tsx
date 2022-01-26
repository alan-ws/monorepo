import React from 'react';
import { RegionalDrop } from '../components/dropdowns';
import { ActionBar, SearchBar } from '../components/navbars';
import { Main } from '../components/promotionals';

export const Home = () => {
  return (
    <>
      <RegionalDrop />
      <ActionBar />
      <SearchBar />
      <Main />
    </>
  );
};
