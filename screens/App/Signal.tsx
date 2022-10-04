
import React from 'react'
import { Actionsheet, Badge, Box, Button, Divider, HStack, Icon, Image,Text, useDisclose, VStack } from 'native-base'

const Signal = () => {

   const {isOpen, onOpen, onClose} = useDisclose();
  return (
    <Box flex={1} mt={3} alignItems={'center'}>
      <Box
        background={'muted.100'}
        w={350}
        h={150}
        borderRadius={10}
        shadow={5}>
        <HStack p={2} alignItems={'center'}>
          <VStack flex={1} justifyContent={'center'} alignItems={'center'}>
            <Image
              size={16}
              resizeMode="cover"
              source={{
                uri: 'https://wallpaperaccess.com/full/317501.jpg',
              }}
              alt={'coin Symbol'}
              borderRadius={5}
            />
            <Text>12 Sep</Text>
            <Text>10 gtm5</Text>
          </VStack>
          <VStack flex={3} justifyContent={'space-between'}>
            <HStack justifyContent={'space-around'}>
              <Text fontWeight={'bold'}>ONE/USDT</Text>
              <Text fontWeight={'bold'}>$34.5</Text>
            </HStack>
            <Divider
              my="1"
              _light={{
                bg: 'muted.400',
              }}
              _dark={{
                bg: 'muted.50',
              }}
            />
            <HStack justifyContent={'space-around'} p={3}>
              <Badge colorScheme="success" borderRadius={10}>
                Entry 0.92 - 0.98
              </Badge>
              <Badge colorScheme="danger" borderRadius={10}>
                StopLoss 0.90
              </Badge>
            </HStack>

            <Button onPress={onOpen}>Targets</Button>
           
          </VStack>
        </HStack>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default Signal;