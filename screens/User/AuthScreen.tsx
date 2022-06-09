
import React from 'react'

import {Box,Text,Input,Stack,Icon} from 'native-base';
import {MaterialIcons} from '@expo/vector-icons'



 const [show, setShow] = React.useState(false);



const AuthScreen = () => {
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
      <Text fontWeight={"bold"} fontSize={20} textAlign="center">
        Login
      </Text>

      <Stack space={4} w="100%" alignItems="center">
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

export default AuthScreen

export const ScreenOptions:any=()=>{
    return {
      headerTitle:'',
      headerTitleStyle: {
        fontSize:26,
        fontWeight: "bold",
      },
    };
}

