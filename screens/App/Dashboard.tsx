import  {Box, VStack, Icon, Pressable, Text, ScrollView} from 'native-base'
import React from 'react'
import { Color } from '../../constants/Colors';


//

const Dashboard = () => {
  return (
    <ScrollView>
      <VStack>
        <Box w={'100%'} h={'30'} alignItems="center" justifyContent={'center'}>
          <Text>Annoucment</Text>
          <Text>Updates</Text>
        </Box>

        <Box alignItems="center" justifyContent={'center'}>
          <Text>Education & Trainings </Text>
        </Box>

        <Box>
          <Text>Hall of fame</Text>
          
        </Box>
      </VStack>
    </ScrollView>
  );
}
//dash board test

export default Dashboard

export const ScreenOptions: any = ({navigation}:any) => {
  return {
    headerTitle: 'Home',
    headerTintColor: 'green',
    headerTitleStyle: {
      color: Color.TColor,
      fontSize: 22,
      fontWeight: 'bold',
    },
  };
};
