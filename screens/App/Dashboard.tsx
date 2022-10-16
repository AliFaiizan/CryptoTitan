import  {Box, VStack, Icon, Pressable, Text, ScrollView} from 'native-base'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Dashboard = () => {
  return (
    <ScrollView>
      <VStack>
        <Box w={'100%'} h={'30'} alignItems="center" justifyContent={'center'}>
          <Text>Annoucment</Text>
          <Text>Updates</Text>
        </Box>

        <Box alignItems="center" justifyContent={'center'}>
          <Text>Trading Rules</Text>
        </Box>

        <Box>
          <Text>Trade pattern</Text>
        </Box>

        <Box>
          <Text>Hall of fame</Text>
        </Box>
      </VStack>
    </ScrollView>
  );
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
