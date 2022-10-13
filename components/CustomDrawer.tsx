import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Box ,Text , Image, Divider} from 'native-base';
// custom draaer component

const CustomDrawer = (props: any) => {

  return (
    <Box flex={1}>
      <DrawerContentScrollView>
        <Box alignItems={'center'} justifyContent={'center'} h='30%' w='100%'>
          <Box  p={3} justifyContent={'center'} alignItems="center">
            <Image
              source={{
                uri: 'https://www.w3schools.com/css/img_lights.jpg',
              }}
              alt="Alternate Text"
              size="sm"
              borderRadius={100}
            />
            <Text fontWeight={'bold'} mt={2} ml={2} >Faizan Ahmed</Text>
          </Box>
        </Box>
        <Divider
          my="2"
          _light={{
            bg: 'muted.200',
          }}
          _dark={{
            bg: 'muted.50',
          }}
        />
        <Box mt={1}>
          <DrawerItemList {...props} />
        </Box>
      </DrawerContentScrollView>
      <Box alignItems={'center'} justifyContent={'center'} h={100}>
        <Text fontWeight={'bold'}>Follow Us On</Text>
        <Box w={'50%'} flexDir="row" py={5} justifyContent="space-around">
          <Ionicons name="logo-twitter" size={23} color="black" />
          <Ionicons name="logo-facebook" size={23} color="black" />
          <Ionicons name="logo-youtube" size={23} color="black" />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomDrawer;
