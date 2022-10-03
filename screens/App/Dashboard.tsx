import  {Box, VStack, Icon, Pressable, Text} from 'native-base'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Dashboard = () => {
  return (
   <VStack>
   <Text>Dashboard</Text>
   </VStack>
  )
}

export default Dashboard

export const ScreenOptions: any = ({navigation}:any) => {
  return {
    headerTitle: 'Home',
    headerTintColor: 'accent.900',
    headerTitleStyle: {
      color: 'grey',
      fontSize: 20,
      fontWeight: 'bold',
    },
    
  };
};
