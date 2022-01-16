import React, { Dispatch, FC, SetStateAction } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import tw from 'twrnc';

export const getInputValue =
  (fn: Dispatch<SetStateAction<string>>) => (event: string) =>
    fn(event);

export const Input: FC<
  Partial<TextInputProps> & { onchange?: (e: any) => void }
> = (props) => {
  return (
    <TextInput placeholder={props.placeholder} onChangeText={props.onchange} />
  );
};
