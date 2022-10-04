
import React from 'react';
import { Icon, Pressable, VStack,Text } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Notification = () => {
  return (
    <VStack>
      <Text>Notification</Text>
    </VStack>
  );
};

export default Notification;

export const ScreenOptions: any = ({navigation}: any) => {
  return {
    headerShown:true,
    headerTitle: 'Notifications',
    headerTintColor: 'accent.900',
    headerTitleStyle: {
      color: 'grey',
      fontSize: 20,
      fontWeight: 'bold',
    },
  };
};