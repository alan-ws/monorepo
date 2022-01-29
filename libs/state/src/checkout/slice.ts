import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBasket {
  product: string;
  quantity: number;
  value: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICheckoutStore {
  basket?: IBasket;
  total: number;
}

const initialState: ICheckoutStore = {
  total: 0,
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    updateBasket(state, action: PayloadAction<IBasket>) {
      state.basket = action.payload;
      state.total = state.total + action.payload.value;
    },
  },
});
