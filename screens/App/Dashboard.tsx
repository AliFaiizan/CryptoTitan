import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Dashboard = () => {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  )
}

export default Dashboard

export const ScreenOptions: any = () => {
  return {
    headerTitle: 'Home',
    headerTitleStyle: {
      fontSize: 26,
      fontWeight: 'bold',
    },
  };
};
