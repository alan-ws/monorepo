import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
// import tw from 'tailwind-react-native-classnames';

// const base = 'flex';

// export const Box: FC<{_css?: string}> =
//   ({children, _css}) =>
//     <View style={tw.style(_css)}>{children}</View>

// export const Flex: FC<{_css?: string}> =
//   ({children, _css}) => {
//     return (
//       <View style={tw.style(base, _css)}>
//         {children}
//       </View>
//     )
// }

export const Box: FC<{ _css?: string }> = ({ children, _css }) => (
  <View>{children}</View>
);

export const Flex: FC<{ _css?: string, onpress?: () => void }> = ({ children, _css, onpress }) => {
  if (!onpress) return <View>{children}</View>;

  return <Pressable onPress={onpress}>
    <View>{children}</View>
  </Pressable>
};
