import { configureStore } from '@reduxjs/toolkit';
import { kernelSlice } from './kernel/kernel.slice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const getStore = (preloadedState = {}) =>
  configureStore({
    reducer: {
      kernel: kernelSlice.reducer,
      [checkoutApi.reducerPath]: checkoutApi.reducer,
      [layoutApi.reducerPath]: layoutApi.reducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(checkoutApi.middleware, layoutApi.middleware),
  });

export const store = getStore();
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
