import  {Box, Icon, Pressable, Text} from 'native-base'
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

export const ScreenOptions: any = ({navigation}:any) => {
  return {
    headerTitle: 'Home',
    headerTintColor: 'accent.900',
    headerTitleStyle: {
      color: 'grey',
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerRight: () => (
      <Pressable onPress={() => navigation.navigate('Notification')}>
        <Icon
          as={<MaterialIcons name="notifications" />}
          size={5}
          mr="2"
          color="muted.600"
        />
      </Pressable>
    ),
    headerLeft: () => (
      <Pressable
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Icon
          as={<FontAwesome name="user-circle-o" />}
          size={5}
          mr="2"
          color="muted.600"
        />
      </Pressable>
    ),
  };
};
