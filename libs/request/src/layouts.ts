import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILayouts } from './types';

export const layoutApi = createApi({
  reducerPath: 'layoutApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61a087ff6c3b400017e69910.mockapi.io/',
  }),
  endpoints: (builder) => ({
    getLayout: builder.query<ILayouts, null>({
      query: () => `layout`,
    }),
  }),
});

export const { useGetLayoutQuery } = layoutApi;
