import React, { FC } from "react"
import { IText } from "."
import {Text as RNText} from 'react-native'
import tw from 'twrnc';

export const Text: FC<IText> = ({children, as, onpress}) => {
    if (!as) return <RNText onPress={onpress} style={tw`text-md text-black dark:text-white`}>{children}</RNText>
    return <RNText onPress={onpress}>{children}</RNText>
}
