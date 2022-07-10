
import React from 'react'

import {Box,Text,Input,Stack,Icon, Pressable} from 'native-base';
import {MaterialIcons} from '@expo/vector-icons';
import { Color } from '../../constants/Colors';







const AuthScreen = () => {
   const [show, setShow] = React.useState(false);

   //used to determine if login or signup
   const [category, setCategory] = React.useState('Login');
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
        <AuthSelector category={category} setCategory={setCategory}/>
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
const AuthSelector=({category,setCategory}:any) => { 
  //this will be the login or signup selector
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
        //this will be the login button
        <Pressable onPress={() => setCategory("Login")}>
          <Box
            backgroundColor={Color.Primary}
            p={1}
            borderRadius={10}
            paddingX={10}
          >
            <Text
              fontWeight={"bold"}
              color={category === "Login" ? "gray.300" : "white"}
            >
              Login
            </Text>
          </Box>
        </Pressable>
        //this is the signup button
        <Pressable onPress={() => setCategory("Signup")}>
          <Box
            backgroundColor={Color.Primary}
            p={1}
            borderRadius={10}
            paddingX={10}
          >
            <Text
              fontWeight={"bold"}
              color={category === "Signup" ? "gray.300" : "white"}
            >
              Signup
            </Text>
          </Box>
        </Pressable>
      </Box>
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

