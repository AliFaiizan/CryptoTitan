
import React,{useState} from 'react'
import Formik from 'formik';
import Yup from 'yup';
import {Box,Text,Input,Stack,Icon, Pressable, Button} from 'native-base';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Color } from '../../constants/Colors';


const AuthSelector = ({ category, setCategory }: any) => {
  //this will be the login or signup selector
  return (
    <Box
      backgroundColor={Color.Secondary}
      w={{
        base: "75%",
        md: "25%",
      }}
      borderRadius={10}
      flexDir={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Formik>
        {
          (formik:any) => {
            return 
          }
        }
      </Formik>
      <Pressable onPress={() => setCategory("Login")} flex={1}>
        <Box
          backgroundColor={
            category === "Login" ? Color.Primary : Color.Secondary
          }
          h={8}
          m={1}
          borderRadius={10}
          alignItems={"center"}
          justifyContent="center"
          shadow={category === "Login" ? 5 : 0}
        >
          <Text
            fontFamily={"open-sans-bold"}
            color={category === "Login" ? Color.TColor : Color.LTColor}
          >
            LOGIN
          </Text>
        </Box>
      </Pressable>
      <Pressable onPress={() => setCategory("Signup")} flex={1}>
        <Box
          backgroundColor={
            category === "Signup" ? Color.Primary : Color.Secondary
          }
          h={8}
          m={1}
          borderRadius={10}
          alignItems={"center"}
          justifyContent={"center"}
          shadow={category === "Signup" ? 5 : 0}
        >
          <Text
            fontFamily={"open-sans-bold"}
            color={category === "Signup" ? Color.TColor : Color.LTColor}
          >
            SIGNUP
          </Text>
        </Box>
      </Pressable>
    </Box>
  );
};




const AuthScreen = () => {
   const [show, setShow] = useState(false);

   //used to determine if login or signup
   const [category, setCategory] = useState('Login');

   const [formValue,setFormValue]=useState({
    email:'',
    password:''
   })

   const {email,password}= formValue;

   const inputChangeHandler=(value:any) => { 
      setFormValue((prevVal) => { 
        console.log(value)
        //has to be fixed
        return {...prevVal}
       })
    }


  return (
    <Box shadow={10} p={4} flex={1}>
      <Stack space={4} w="100%" alignItems="center">
        <Box h={5} mb={4}>
          <AuthSelector category={category} setCategory={setCategory} />
        </Box>

        {category === 'Login' ? (
          <Box justifyContent={'space-between'}>
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              my={2}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Email"
              value={email}
              onChangeText={inputChangeHandler}
            />
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              my={2}
              type={show ? 'text' : 'password'}
              InputRightElement={
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? 'visibility' : 'visibility-off'}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                  onPress={() => setShow(!show)}
                />
              }
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="lock" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                  onPress={() => setShow(!show)}
                />
              }
              placeholder="Password"
              value={password}
              onChangeText={inputChangeHandler}
            />

            <Button my={2}>LOGIN</Button>
            <Pressable>
              <Box
                h={12}
                borderRadius={50}
                alignItems={'center'}
                justifyContent={'space-around'}
                backgroundColor="red.500"
                shadow={3}
                flexDir="row">
                <Icon
                  as={<AntDesign name="google" />}
                  size={5}
                  ml="2"
                  color="white"
                />
                <Text fontFamily={'open-sans'} color={Color.TColor}>
                  LOGIN WITH GOOGLE
                </Text>
              </Box>
            </Pressable>
          </Box>
        ) : (
          <Box>
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              my={2}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Email"
            />
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              my={2}
              type={show ? 'text' : 'password'}
              InputRightElement={
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? 'visibility' : 'visibility-off'}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                  onPress={() => setShow(!show)}
                />
              }
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="lock" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                  onPress={() => setShow(!show)}
                />
              }
              placeholder="Password"
            />
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              my={2}
              type={show ? 'text' : 'password'}
              InputRightElement={
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? 'visibility' : 'visibility-off'}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                  onPress={() => setShow(!show)}
                />
              }
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="lock" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                  onPress={() => setShow(!show)}
                />
              }
              placeholder="Confirm Password"
            />
            <Button my={2}>SIGNUP</Button>
          </Box>
        )}
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

