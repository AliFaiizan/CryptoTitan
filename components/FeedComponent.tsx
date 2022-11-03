
import { Box, Divider, Text,Image } from 'native-base'
import React from 'react'
import { Color } from '../constants/Colors'

const FeedComponent = () => {
  return (
    <Box
      justifyContent={'center'}
      borderRadius={10}
      borderWidth={2}
      borderColor={Color.BorderColor}
      w={'100%'}>
      <Box  borderRadius={10}>
        <Image
          source={{
            uri: 'https://img.freepik.com/premium-vector/golden-bitcoin-blockchain-technology-3d-concept-suitable-future-technology-banner-cover_384372-81.jpg?w=2000',
          }}
          alt="image"
          size={'xl'}
          width={'100%'}
          borderTopRadius={10}
        />
      </Box>
      <Divider
      
        h={0.5}
        my="1"
        _light={{
          bg: Color.BorderColor,
        }}
        _dark={{
          bg: 'muted.50',
        }}
      />
      <Box alignItems={'flex-start'} px={3} pb={3}>
        <Text fontWeight={'bold'} color={Color.TColor} mb={1}>
          1 Day ago
        </Text>
        <Text fontWeight={'bold'} color={Color.TColor}>
          Are you curious why crypto currencies have a value?
          <Text fontWeight={'bold'} color={Color.BtnColor}>
            Lets find out
          </Text>
        </Text>
      </Box>
    </Box>
  );
}

export default FeedComponent

