import { FC } from 'react';

type Icon = string | 'down-arrorw';

interface IDropdown {
  content: string | string[];
  icon?: Icon;
}

export const Dropdown: FC<{ content: string | string[] }> = () => {
  return <h1></h1>;
};
