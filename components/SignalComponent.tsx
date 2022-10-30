
import React, { useRef } from 'react'
import { Badge, Box, Button, Divider, HStack, Image, Text, VStack } from 'native-base';
import { Color } from '../constants/Colors';
import { SheetManager } from 'react-native-actions-sheet';


export default function SignalComponent({imageUrl,date,title,price,isHot,entry,stop,targets,info}:any) {

  const actionSheetRef = useRef(null);


  return (
    <Box
      background={'muted.100'}
      m={1}
      borderRadius={10}
      shadow={5}
      my={1}>
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
          <Text fontSize={10} pt={3}>
            {date}
          </Text>
          <Text fontSize={10}>10 gmt5</Text>
        </VStack>
        <VStack flex={3} justifyContent={'space-between'}>
          <HStack justifyContent={'space-around'}>
            <Text fontWeight={'bold'}>{title}</Text>

            {isHot && (
              <Image
                source={{
                  uri: 'https://png.pngtree.com/png-clipart/20190116/ourmid/pngtree-star-cartoon-cartoon-stars-icon-png-image_381356.jpg',
                }}
                alt="Alternate Text"
                size={6}
              />
            )}
            <Text fontWeight={'bold'}>${price}</Text>
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
              {entry}
            </Badge>
            <Badge colorScheme="danger" borderRadius={10}>
              {stop}
            </Badge>
          </HStack>

          <Box flexDir={'row'} justifyContent="center">
            <Button
              onPress={() => {
                SheetManager.show('signal');
              }}
              height={10}
              width="85%"
              backgroundColor={Color.BtnColor}>
              Targets
            </Button>
          </Box>
        </VStack>
      </HStack>
      <Box>
        
      </Box>
    </Box>
  );
}
