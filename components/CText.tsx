import {Text} from 'native-base';
import React from 'react';
import {Color} from '../constants/Colors';

export default function CText({
  color,
  fontweight,
  text,
  ...props
}: any) {
  return (
   <Text {...props} color={color||Color.TColor}>
        {text}
    </Text>
  );
}
