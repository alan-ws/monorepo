import React from 'react';
import { getNavigation } from '@kaddra-app/management/state';
import { AppNavigator } from '../../base/navigation';

const Navigation = () => {
  const routes = getNavigation();

  return <AppNavigator routes={routes} />;
};

export { Navigation };
