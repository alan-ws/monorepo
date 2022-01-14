// not correct path to file - should be @kaddra-app
import React from 'react';
import { getNavigation } from '../../../../management/state/src/index';
import { AppNavigator } from '../../base/navigation';

const Navigation = () => {
  const routes = getNavigation();

  return <AppNavigator routes={routes} />
};

export { Navigation };
