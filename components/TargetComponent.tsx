
import React from 'react'
import { Box, Image, Text } from 'native-base';

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
      <Text fontWeight={'bold'} fontSize={14}>
        {index} .
      </Text>
      <Text fontWeight={'bold'} fontSize={14}>
        {price}
      </Text>
      <Text fontWeight={'bold'} fontSize={14} color={'emerald.600'}>
        {percentage}%
      </Text>
      <Image
        source={{
          uri: 'https://i.pinimg.com/originals/72/84/a2/7284a2e9b44f63a6d92139f7bb10b76e.png',
        }}
        alt="Alternate Text"
        size={6}
      />
    </Box>
  );
}

export default TargetComponent

