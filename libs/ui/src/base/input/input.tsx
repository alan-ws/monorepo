import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

type ChangeEventHandler<T = Element> = (event: ChangeEvent<T>) => void;

export const getInputValue =
  (fn: Dispatch<SetStateAction<string>>) =>
  (event: ChangeEvent<HTMLInputElement>) =>
    fn(event.target.value);

export const Input: FC<
  Partial<HTMLInputElement> & {
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  }
> = (props) => {
  return <input placeholder={props.placeholder} onChange={props.onChange} />;
};
