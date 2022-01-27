import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProducts } from './types';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61a087ff6c3b400017e69910.mockapi.io/',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProducts[], void>({
      query: () => `product`,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
