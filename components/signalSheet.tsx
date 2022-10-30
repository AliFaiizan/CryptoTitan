
import React, { useRef } from 'react'
import TargetComponent from './TargetComponent';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import { Badge, Box, Button, Divider, HStack, Text, VStack } from 'native-base';
import { Color } from '../constants/Colors';

export default function signalSheet({sheet,targets,entry,stop,info}:any) {


  return (
    <ActionSheet id='signal' >
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
          {/* {targets.map((targetPrice: any, index: number) => {
            return (
              <TargetComponent
                index={index + 1}
                price={targetPrice}
                percentage={(((targetPrice - 20) / 20) * 100).toPrecision(2)}
              />
            );
          })} */}
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
            SheetManager.hide('signal')
          }}
          height={10}
          width="85%"
          backgroundColor={Color.BtnColor}>
          Close
        </Button>
      </Box>
    </ActionSheet>
  );
}