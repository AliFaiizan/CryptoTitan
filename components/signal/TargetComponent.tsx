
import React from 'react'
import { Box, Image, Text } from 'native-base';
import { Color } from '../../constants/Colors';

const TargetComponent = ({index,price,percentage}:any) => {
  return (
    <Box
      borderRadius={10}
      shadow="2"
      w={'85%'}
      h={30}
      m="2"
      bg={'muted.100'}
      flexDir="row"
      alignItems={'center'}
      justifyContent={'space-evenly'}>
      <Text fontWeight={'bold'} fontSize={14} color={'muted.500'}>
        {index} .
      </Text>
      <Text fontWeight={'bold'} fontSize={14} color={Color.TColor}>
        {price}
      </Text>
      <Text fontWeight={'bold'} fontSize={14} color="#54B435">
        {percentage}%
      </Text>
      <Image
        source={require('../../assets/icons/upword.png')}
        alt="Alternate Text"
        size={10}
      />
    </Box>
  );
}

export default TargetComponent

