
import React, { useRef } from 'react'
import { Badge, Box, Button, Divider, HStack, Image, Text, VStack } from 'native-base';
import ActionSheet from 'react-native-actions-sheet';
import TargetComponent from './TargetComponent';


export default function SignalComponent() {

  const actionSheetRef = useRef(null);


  return (
    <Box background={'muted.100'} w={350} h={150} borderRadius={10} shadow={5} my={1}>
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
          <Text fontSize={10}>12 Sep</Text>
          <Text fontSize={10}>10 gmt5</Text>
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

          <Button
            onPress={() => {
              actionSheetRef.current?.show();
            }}
            height={10}>
            Targets
          </Button>
        </VStack>
      </HStack>
      <Box>
        <ActionSheet ref={actionSheetRef}>
          <Box alignItems={'center'} px={3}>
            <Box mt={2} borderRadius={50} w={10} bg={'muted.400'} h={1}></Box>
            <HStack w={'100%'} justifyContent={'space-around'} p={2}>
              <Badge colorScheme="success" borderRadius={10}>
                Entry 0.92 - 0.98
              </Badge>
              <Badge colorScheme="danger" borderRadius={10}>
                StopLoss 0.90
              </Badge>
            </HStack>
            <VStack px={5}>
              <TargetComponent index="1" price="12.5" percentage="13%" />
              <TargetComponent index="2" price="12.5" percentage="13%" />
              <TargetComponent index="3" price="12.5" percentage="13%" />
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
            <Text fontWeight={'bold'} fontSize="xl">
              Info
            </Text>
          </Box>
        </ActionSheet>
      </Box>
    </Box>
  );
}