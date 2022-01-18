import React, { FC } from 'react';
import { Box as NBBox } from 'native-base';

const Box: FC = ({ children }) => {
  return <NBBox>{children}</NBBox>;
};

export { Box };
