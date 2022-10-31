
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
    headerTitle: 'Notifications',
    headerTintColor: '#a5a5a5',  
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: 'bold',
    },
  };
};