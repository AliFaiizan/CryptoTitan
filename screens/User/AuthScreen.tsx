
import React from 'react'

import {Box,Text,Input,Stack,Icon} from 'native-base';
import {MaterialIcons} from '@expo/vector-icons';
import { Color } from '../../constants/Colors';







const AuthScreen = () => {
   const [show, setShow] = React.useState(false);
  return (
    <Box
      shadow={10}
      bg={{
        linearGradient: {
          colors: ["#212931", "#31453e"],
          start: [0.5, 0.8],
          end: [0.5, 1],
        },
      }}
      p={4}
      flex={1}
    >
    

      <Stack space={4} w="100%" alignItems="center">
        <AuthSelector />
        <Input
          w={{
            base: "75%",
            md: "25%",
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="person" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          placeholder="Name"
        />
        <Input
          w={{
            base: "75%",
            md: "25%",
          }}
          type={show ? "text" : "password"}
          InputRightElement={
            <Icon
              as={
                <MaterialIcons name={show ? "visibility" : "visibility-off"} />
              }
              size={5}
              mr="2"
              color="muted.400"
              onPress={() => setShow(!show)}
            />
          }
          placeholder="Password"
        />
      </Stack>
    </Box>
  );
}

export default AuthScreen;

export const ScreenOptions:any=()=>{
    return {
      headerTitle:'',
      headerTitleStyle: {
        fontSize:26,
        fontWeight: "bold",
      },
    };
}

const AuthSelector=() => { 
  return (
    <Box
      backgroundColor={Color.Secondary}
      w={{
        base: "75%",
        md: "25%",
      }}
      h={{
        base: "17%",
        md: "15%",
      }}
      borderRadius={10}
    >
      <Box
        flexDir={"row"}
        justifyContent="space-around"
        alignItems={"center"}
        flex={1}
      >
        <Box
          backgroundColor={Color.Primary}
          p={1}
          borderRadius={10}
          paddingX={10}
        >
          <Text fontWeight={"bold"} color={"gray.300"}>
            Login
          </Text>
        </Box>
        <Box
          backgroundColor={Color.Primary}
          p={1}
          borderRadius={10}
          paddingX={10}
        >
          <Text fontWeight={"bold"} color={"gray.300"}>
            Signup
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
