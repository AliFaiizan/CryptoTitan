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
  const {
    header,
    itemList,
    profileText,
  } = styles;

  return (
    <Box flex={1}>
      <DrawerContentScrollView>
        <Box alignItems={'center'} justifyContent={'center'} h={100} >
          <Box w={'80%'} flexDir="row" pb={2}>
            <Image
              source={{
                uri: 'https://www.w3schools.com/css/img_lights.jpg',
              }}
              alt="Alternate Text"
              size="sm"
              borderRadius={100}
            />
            <Text style={profileText}>Faizan Ahmed</Text>
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
        <View style={itemList}>
          <DrawerItemList {...props} />
        </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  itemList: {
    marginTop: 15,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 8,
    width: '80%',
    height: 40,
    borderRadius: 5,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    overflow: 'hidden',
  },
  profile: {
    width: '80%',
    flexDirection: 'row',
    paddingBottom: 10,
  },
  profileText: {
    paddingTop: 20,
    paddingLeft: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottom: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
});
