import { Button, Text } from 'native-base'
import React from 'react'
import { Color } from '../constants/Colors';

export default function CButton({onPress,borderColor,buttonColor,text,...props}:any) {
  return (
    <Button
    {...props}
      onPress={onPress}
      height={12}
      borderWidth={2}
      borderColor={borderColor || Color.BorderColor}
      width="85%"
      backgroundColor={buttonColor || Color.BtnColor}>
      <Text fontSize={15} fontWeight={'bold'} color={'muted.300'}>
        {text}
      </Text>
    </Button>
  );
}