
import React, { useRef } from 'react'
import { Badge, Box, Button, Divider, HStack, Image, Text, VStack } from 'native-base';
import { Color } from '../../constants/Colors';
import { SheetManager } from 'react-native-actions-sheet';


export default function SignalComponent({imageUrl,date,title,price,isHot,entry,stop,targets,info}:any) {

  return (
    <Box
      background={'white'}
      m={1}
      borderRadius={10}
      my={0}
      borderWidth={2}
      borderBottomWidth={4}
      borderColor={Color.BorderColor}>
      <HStack p={2} alignItems={'center'}>
        <VStack flex={1} justifyContent={'center'} alignItems={'center'}>
          <Image
            size={16}
            resizeMode="cover"
            source={{
              uri: imageUrl,
            }}
            alt={'coin Symbol'}
            borderRadius={5}
          />
          <Text fontSize={10} pt={3} color={Color.TColor}>
            {date}
          </Text>
          <Text fontSize={10} color={Color.TColor}>
            10 gmt5
          </Text>
        </VStack>
        <VStack flex={3} justifyContent={'space-between'}>
          <HStack justifyContent={'space-around'}>
            <Text fontWeight={'bold'} color={Color.TColor}>
              {title}
            </Text>

            {isHot && (
              <Image
                source={{
                  uri: 'https://png.pngtree.com/png-clipart/20190116/ourmid/pngtree-star-cartoon-cartoon-stars-icon-png-image_381356.jpg',
                }}
                alt="Alternate Text"
                size={6}
              />
            )}
            <Text fontWeight={'bold'} color={Color.TColor}>
              ${price}
            </Text>
          </HStack>
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
          <HStack justifyContent={'space-around'} p={3}>
            <Badge colorScheme="success" borderRadius={10}>
              {entry}
            </Badge>
            <Badge colorScheme="danger" borderRadius={10}>
              {stop}
            </Badge>
          </HStack>

          <Box flexDir={'row'} justifyContent="center" mb={1}>
            <Button
              onPress={() => {
                SheetManager.show('signal', {
                  payload: {
                    entry,
                    stop,
                    targets,
                  },
                });
              }}
              height={10}
              borderWidth={2}
              borderColor={Color.BorderColor}
              width="85%"
              backgroundColor={Color.BtnColor}>
              Targets
            </Button>
          </Box>
        </VStack>
      </HStack>
      <Box></Box>
    </Box>
  );
}
