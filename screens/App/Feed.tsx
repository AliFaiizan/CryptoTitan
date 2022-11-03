
import { Box, Divider, Text } from 'native-base'
import React from 'react'
import FeedComponent from '../../components/FeedComponent'
import { Color } from '../../constants/Colors'

const Feed = () => {
  return (
    <Box 
      alignItems={'center'} 
      justifyContent={'center'}
      m={2}
    >
      <FeedComponent/>

      <FeedDivider my={'5'} />
    </Box>
  )
}

export default Feed


const FeedDivider=({props}:any) => {
    return (
      <Box flexDir={'row'} m={3} alignItems="center">
        <Divider
          h={0.5}
          _light={{
            bg: Color.BorderColor,
          }}
          _dark={{
            bg: 'muted.50',
          }}
          {...props}
        />
        <Text mx={3} fontWeight={'bold'} color={Color.TColor}>
          Earlier
        </Text>
        <Divider
          h={0.5}
          _light={{
            bg: Color.BorderColor,
          }}
          _dark={{
            bg: 'muted.50',
          }}
          {...props}
        />
      </Box>
    );
}
