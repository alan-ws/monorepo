import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IVerifiedStock } from './types';

export const checkoutApi = createApi({
  reducerPath: 'checkoutApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61f5ae1962f1e300173c4221.mockapi.io/',
  }),
  endpoints: (builder) => ({
    verifyStockLevel: builder.mutation<
      IVerifiedStock[],
      { productId: string; quantity: number }
    >({
      query: ({ productId, quantity }) => ({
        url: `verify-stock`,
        method: 'GET',
      }),
    }),
  }),
});

export const {useVerifyStockLevelMutation} = checkoutApi
