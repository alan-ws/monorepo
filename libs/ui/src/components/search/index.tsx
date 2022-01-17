import React, { useCallback, useState } from 'react';
import { getInputValue, Input } from '../../base/input';

export const Search = () => {
  const [input, setInput] = useState<string>('');
  const handleChange = useCallback(getInputValue(setInput), []);

  return <Input onChange={handleChange} />;
};
