import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Icon, Pressable } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Notification = () => {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
};

export default Notification;

export const ScreenOptions: any = ({navigation}: any) => {
  return {
    headerTitle: 'Notifications',
    headerTintColor: 'accent.900',
    headerTitleStyle: {
      color: 'grey',
      fontSize: 20,
      fontWeight: 'bold',
    },
  };
};