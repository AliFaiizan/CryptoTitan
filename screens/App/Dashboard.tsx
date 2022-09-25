import  {Box, Icon, Text} from 'native-base'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Dashboard = () => {
  return (
   <Box>
   <Text>Dashboard</Text>
   </Box>
  )
}

export default Dashboard

export const ScreenOptions: any = () => {
  return {
    headerTitle: 'Home',
    headerTintColor:'accent.900',
    headerTitleStyle: {
      color:'grey',
      fontSize: 20,
      fontWeight: 'bold',
      
    },
    headerRight: () => (
      <Icon
        as={<MaterialIcons name="notifications" />}
        size={5}
        mr="2"
        color="accent.900"
        onPress={() => 0}
      />
    ),
    headerLeft: () => (
      <Icon
        as={<FontAwesome name="user-circle-o" />}
        size={5}
        mr="2"
        color="accent.900"
        onPress={() => 0}
      />
    ),
  };
};
