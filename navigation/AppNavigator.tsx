import React from "react";

import { Platform } from "react-native";

//Version 5 migraiton

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";


import AuthScreen,{ ScreenOptions as AuthOptions}  from "../screens/User/AuthScreen"; 
import { Color } from "../constants/Colors";
import Dashboard ,{ScreenOptions as DashboardOptions} from "../screens/App/Dashboard";
import CustomDrawer from "../components/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";


//dashboard




//Stack Creation

const daskboardStack = createNativeStackNavigator();
//const orderStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const authStack= createNativeStackNavigator();


const AuthNavigator=() => {
  return (
    <authStack.Navigator screenOptions={defaultNavigationOption}>
      <authStack.Screen name="Auth" component={AuthScreen} options={AuthOptions} />
    </authStack.Navigator>
  );
}

const DashBoardNavigator=() => {
     return (
       <daskboardStack.Navigator screenOptions={defaultNavigationOption}>
         <daskboardStack.Screen
           name="Dashboard"
           component={Dashboard}
           options={DashboardOptions}
         />
       </daskboardStack.Navigator>
     );
}

const DrawerNavigator= () => { 
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return <CustomDrawer {...props} />;
      }}
      screenOptions={defaultNavigationOption}>
      <Drawer.Screen
        name="Products"
        component={DashBoardNavigator}
        options={{
          headerShown: false,
          drawerIcon: props => {
            return <Ionicons size={23} name="home" color={props.color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
 }



const AppNavigator = (props: any) => {

  // const  isAuth= useSelector((state:any)=>!!state.auth.token)
  //const didTryAL=useSelector((state:any) => { return state.auth.didTryAL }) 

  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      {true&&<DrawerNavigator />}
    </NavigationContainer>
  );
};

const defaultNavigationOption = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Color.Primary : "#fff",
  },
  headerTintColor: Platform.OS === "android" ? Color.Primary : "",
};


export default AppNavigator;

