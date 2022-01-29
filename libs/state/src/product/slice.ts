import { createSlice } from '@reduxjs/toolkit';

interface IProduct {
  id: string;
  name: string;
  quantity: number;
  quantities: string[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProductStore {
  products?: IProduct[];
  activeProduct?: IProduct;
}

const initialState: IProductStore = {
  products: [
    { id: '12', name: 'Vevue', quantity: 4, quantities: ['case', 'half case'] },
  ],
  activeProduct: { id: '12', name: 'Vevue', quantity: 4, quantities: ['case', 'half case'] },
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  },
});
