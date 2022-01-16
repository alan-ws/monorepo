import React from 'react'
import { Dropdown, IDropdown } from "./composed/dropdown";

export type Components = 'region_dropdown';
export const componentLookup: Record<string, any> = {
  region_dropdown: (props: IDropdown) => Dropdown(props),
};
