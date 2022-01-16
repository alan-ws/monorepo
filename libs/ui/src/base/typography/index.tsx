import { Text } from './typography';

export { Text };

// the as is for styling
export interface IText {
  as?: string;
  onpress?: (e: any) => void;
  onhover?: (e: any) => void;
}