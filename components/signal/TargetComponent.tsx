
import React from 'react'
import { Box, HStack, Image, Text } from 'native-base';
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
      justifyContent={'space-around'}>
      <Text fontWeight={'bold'} fontSize={14} color={'muted.500'} flex={1} ml={5}>
        {index} .
      </Text>
      <Text fontWeight={'bold'} fontSize={14} color={Color.TColor} flex={1}>
        {price}
      </Text>
      <HStack justifyContent={'center'} alignItems={'center'} flex={1}>
        <Text fontWeight={'bold'} fontSize={14} color="#54B435">
          {percentage}%
        </Text>
        <Image
          source={require('../../assets/icons/upword.png')}
          alt="Alternate Text"
          size={10}
        />
      </HStack>
    </Box>
  );
}

export default TargetComponent

