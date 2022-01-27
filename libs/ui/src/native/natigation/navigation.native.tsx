import React, { FC } from 'react';
import { Home } from '../../presentation/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getNavigation } from '@kaddra-app/management/state';
import { Fallback, Pages } from '../../presentation';
import { ProductList } from '../../presentation/product/list';
import { Product } from '../../presentation/product/single';
import { Category } from '../../presentation/category';
import { CategoryList } from '../../presentation/category/list';
import { useNavigation as useNativeNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
export const AppNavigation: FC = () => {
  const routes = getNavigation();

  return (
    <Tab.Navigator>
      {routes.map((route) => (
        <Tab.Screen
          key={route}
          name={`${route.replace(/-and-/, ' & ')}`}
          options={{ headerShown: false }}
          component={Pages[route] ?? Fallback}
        />
      ))}
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();
export const HomeNavigation = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={'homestack'}
        options={{ headerShown: false }}
        component={Home}
      />
      <HomeStack.Screen
        name={'category'}
        options={{ headerShown: false }}
        component={CategoryNavigation}
      />
    </HomeStack.Navigator>
  );
};

const CategoriesStack = createNativeStackNavigator();
export const CategoryNavigation = () => {
  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen
        name={'categorystack'}
        options={{ headerShown: false }}
        component={Category}
      />
      <CategoriesStack.Screen
        name={'product'}
        options={{ headerShown: false }}
        component={ProductNavigation}
      />
    </CategoriesStack.Navigator>
  );
};

const ProductStack = createNativeStackNavigator();
export const ProductNavigation = () => {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen
        name={'productPage'}
        options={{ headerShown: false }}
        component={ProductList}
      />
      <ProductStack.Screen
        name={'veuve'}
        options={{ headerShown: false }}
        component={Product}
      />
    </ProductStack.Navigator>
  );
};

export const useNavigation = (): {
  navigate: any;
  reset: any;
  params: any;
  goBack?: any;
  replace: any;
} => {
  const navigator = useNativeNavigation();
  const { navigate, reset, goBack } = navigator;

  return {
    navigate: (path: string) =>
      navigate(path.includes('?') ? path.split('?')[1].split('=')[1] : path),
    reset,
    params: () => {
      const { routes } = navigator.getState();
      const params = {};
      routes.forEach((value) => {
        params[value.name] = value.params;
      });
      return params;
    },
    goBack,
    replace: (path: string) => navigate(path.split('/')[1]),
  };
};
