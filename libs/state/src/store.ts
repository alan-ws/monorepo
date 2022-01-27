import { configureStore } from '@reduxjs/toolkit';
import { kernelSlice } from './kernel/kernel.slice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const getStore = (preloadedState = {}) =>
  configureStore({
    reducer: {
      kernel: kernelSlice.reducer,
      [productApi.reducerPath]: productApi.reducer,
      [layoutApi.reducerPath]: layoutApi.reducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware, layoutApi.middleware),
  });

export const store = getStore();
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
