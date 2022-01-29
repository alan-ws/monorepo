import { configureStore } from '@reduxjs/toolkit';
import { kernelSlice } from './kernel/slice';
import { productSlice } from './product/slice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { checkoutApi } from '@kaddra-app/request';
import { checkoutSlice } from './checkout/slice';

export const getStore = (preloadedState = {}) =>
  configureStore({
    reducer: {
      kernel: kernelSlice.reducer,
      product: productSlice.reducer,
      checkout: checkoutSlice.reducer,
      [checkoutApi.reducerPath]: checkoutApi.reducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(checkoutApi.middleware),
  });

export const store = getStore();
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
