import React from "react";

import { Platform, Pressable } from "react-native";

//Version 5 migraiton

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import { useSelector } from "react-redux";


import AuthScreen,{ ScreenOptions as AuthOptions}  from "../screens/User/AuthScreen"; 
import { Color } from "../constants/Colors";
import Dashboard ,{ScreenOptions as DashboardOptions} from "../screens/App/Dashboard";
import Notification,{ScreenOptions as NotificationOptions} from "../screens/App/Notification";
import CustomDrawer from "../components/CustomDrawer";


import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome  from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




import Signal from "../screens/App/Signal";
import Defi from "../screens/App/Defi";
import Articals from "../screens/App/Articals";
import { Icon } from "native-base";




//dashboard




//Stack Creation

const daskboardStack = createNativeStackNavigator();
//const orderStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const authStack= createNativeStackNavigator();


const Tab = createBottomTabNavigator();

const BottomTabs=()=> {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen
        name="Home"
        component={DashBoardNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          // tabBarBadge: 0,
        }}
      />
      <Tab.Screen
        name="Signal"
        component={Signal}
        options={{
          tabBarLabel: 'Signal',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="trending-up" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Defi"
        component={Defi}
        options={{
          tabBarLabel: 'Exchange',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="database" color={color} size={size} />
          ),
          // tabBarBadge: 0,
        }}
      />
      <Tab.Screen
        name="Articals"
        component={Articals}
        options={{
          tabBarLabel: 'Articals',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="article" color={color} size={size} />
          ),
          // tabBarBadge: 0,
        }}
      />
    </Tab.Navigator>
  );
}

const AuthNavigator =() => {
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
         <daskboardStack.Screen
           name="Notification"
           component={Notification}
           options={NotificationOptions}
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
        name="Home"
        component={BottomTabs}
        options={{
          headerShown: false,
          drawerIcon: props => {
            return <Ionicons size={23} name="home" color={props.color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Education"
        component={DashBoardNavigator}
        options={{
          headerShown: false,
          drawerIcon: props => {
            return <FontAwesome size={23} name="book" color={props.color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Premium"
        component={DashBoardNavigator}
        options={{
          headerShown: false,
          drawerIcon: props => {
            return <FontAwesome size={23} name="diamond" color={props.color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Refral"
        component={DashBoardNavigator}
        options={{
          headerShown: false,
          drawerIcon: props => {
            return <FontAwesome size={23} name="tag" color={props.color} />;
          },
        }}
      />

      <Drawer.Screen
        name="Setting"
        component={DashBoardNavigator}
        options={{
          headerShown: false,
          drawerIcon: props => {
            return <Ionicons size={23} name="settings" color={props.color} />;
          },
        }}
      />

      <Drawer.Screen
        name="Logout"
        component={DashBoardNavigator}
        options={{
          headerShown: false,
          drawerIcon: props => {
            return <FontAwesome size={23} name="sign-out" color={props.color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
 }



const AppNavigator = (props: any) => {

  // const  isAuth= useSelector((state:any)=>!!state.auth.token)
  // const didTryAL=useSelector((state:any) => { return state.auth.didTryAL }) 

  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      {true&&<DrawerNavigator />}
    </NavigationContainer>
  );
};

const defaultNavigationOption = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Color.Primary : '#fff',
  },
  headerTintColor: Platform.OS === 'android' ? Color.Primary : '',
  headerShown: false,
};
const tabScreenOptions = ({navigation}:any)=> {
  return {
    
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


export default AppNavigator;

