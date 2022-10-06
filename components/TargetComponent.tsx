
import React from 'react'
import { Box, Text } from 'native-base';

const TargetComponent = ({index,price,percentage}:any) => {
  return (
    <Box
      borderRadius={50}
      shadow="2"
      w={'100%'}
      h={30}
      m="2"
      bg={'muted.100'}
      flexDir="row"
      alignItems={'center'}
      justifyContent={'space-around'}>
      <Text fontWeight={'bold'} fontSize={17}>
        {index} .
      </Text>
      <Text fontWeight={'bold'} fontSize={17}>
        {price}
      </Text>
      <Text fontWeight={'bold'} fontSize={17}>
        {percentage}
      </Text>
    </Box>
  );
}

export default TargetComponent

