import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface KernelStore {}

const initialState: KernelStore = {};

export const kernelSlice = createSlice({
  name: 'kernel',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    initiate() {},
  },
});
