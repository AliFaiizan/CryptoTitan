
import React, { useRef } from 'react'
import { Badge, Box, Button, Divider, HStack, Image, Text, VStack } from 'native-base';
import ActionSheet from 'react-native-actions-sheet';
import TargetComponent from './TargetComponent';
import { Color } from '../constants/Colors';


export default function SignalComponent({imageUrl,date,title,price,isHot,entry,stop,targets,info}:any) {

  const actionSheetRef = useRef(null);


  return (
    <Box
      background={'muted.100'}
      w={350}
      h={150}
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
                actionSheetRef.current?.show();
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
        <ActionSheet ref={actionSheetRef}>
          <Box alignItems={'center'} px={3}>
            <Box mt={2} borderRadius={50} w={10} bg={'muted.400'} h={1}></Box>
            <HStack w={'100%'} justifyContent={'space-around'} p={2}>
              <Badge colorScheme="success" borderRadius={10}>
                {entry}
              </Badge>
              <Badge colorScheme="danger" borderRadius={10}>
                {stop}
              </Badge>
            </HStack>
            <VStack px={5}>
              {targets.map((targetPrice: any, index: number) => {

                return (
                  <TargetComponent
                    index={index + 1}
                    price={targetPrice}
                    percentage={(((targetPrice - 20) / 20) * 100).toPrecision(
                      2,
                    )}
                  />
                );
              })}
            </VStack>
            <Divider
              alignSelf={'center'}
              my="2"
              w={150}
              _light={{
                bg: 'muted.400',
              }}
              _dark={{
                bg: 'muted.50',
              }}
            />
            {info && (
              <Text fontWeight={'bold'} fontSize="xl">
                Info
              </Text>
            )}
            <Button
              onPress={() => {
                actionSheetRef.current?.hide();
              }}
              height={10}
              width="85%"
              backgroundColor={Color.BtnColor}>
              Close
            </Button>
          </Box>
        </ActionSheet>
      </Box>
    </Box>
  );
}