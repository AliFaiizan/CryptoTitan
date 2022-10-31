import React from "react";

import { Platform, Pressable } from "react-native";

//Version 5 migraiton

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


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
import { Icon, Image } from "native-base";




//dashboard




//Stack Creation

const dashboardStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const authStack= createNativeStackNavigator();
const RootTab = createNativeStackNavigator();
const SignalTopTab = createMaterialTopTabNavigator();


const Tab = createBottomTabNavigator();

const RootTabNavigator=() => { 
  return (
    <RootTab.Navigator>
      <RootTab.Screen
        name="Tabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <RootTab.Screen
        name="Notification"
        component={Notification}
        options={NotificationOptions}
      />
    </RootTab.Navigator>
  );
 }

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

        }}
      />
      <Tab.Screen
        name="Signal"
        component={SingalTopTabs}
        options={{
          tabBarLabel: 'Signal',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="trending-up" color={color} size={size} />
          ),
          // tabBarBadge: 1,

        }}
      />
      <Tab.Screen
        name="Defi"
        component={Defi}
        options={{
          tabBarLabel: 'Defi',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="database" color={color} size={size} />
          ),
          // tabBarBadge: 0,

        }}
      />
      <Tab.Screen
        name="Feed"
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

const SingalTopTabs=() => {
  return (
    <SignalTopTab.Navigator screenOptions={TopTabOptions}>
      <SignalTopTab.Screen
        name="Crypto"
        component={Signal}
        options={{
          
        }}
      />
      <SignalTopTab.Screen name="Fx" component={Signal} />
    </SignalTopTab.Navigator>
  );
}
const TopTabOptions = {
  tabBarActiveTintColor: 'green',
  tabBarIndicatorStyle: {
    backgroundColor: Color.BorderColor,
    borderRadius: 10,
  },
};

const DashBoardNavigator=() => {
     return (
       <dashboardStack.Navigator screenOptions={defaultNavigationOption}>
            <dashboardStack.Screen
              name="Dashboard"
              component={Dashboard}
              options={DashboardOptions}
            /> 
       </dashboardStack.Navigator>
     );
}



const DrawerNavigator= () => { 
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return <CustomDrawer {...props} />;
      }}
      screenOptions={drawerOptions}>
      <Drawer.Screen
        name="Home"
        component={RootTabNavigator}
        options={{
          headerShown: false,
          drawerIcon: props => {
            return <Ionicons size={22} name="home" color={props.color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Premium"
        component={DashBoardNavigator}
        options={{
          headerShown: false,
          drawerIcon: props => {
            return (
              <FontAwesome size={props.size} name="star" color={props.color} />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Refral"
        component={DashBoardNavigator}
        options={{
          headerShown: false,
          drawerIcon: props => {
            return (
              <FontAwesome size={props.size} name="tag" color={props.color} />
            );
          },
        }}
      />

      <Drawer.Screen
        name="Setting"
        component={DashBoardNavigator}
        options={{
          headerShown: false,
          drawerIcon: props => {
            return (
              <Ionicons size={22} name="settings" color={props.color} />
            );
          },
        }}
      />

      <Drawer.Screen
        name="Logout"
        component={DashBoardNavigator}
        options={{
          headerShown: false,
          drawerIcon: props => {
            return (
              <FontAwesome
                size={props.size}
                name="sign-out"
                color={props.color}
              />
            );
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
  headerShown: false,
};

const drawerOptions = {
  drawerActiveTintColor: Color.BtnColor,
  drawerInactiveTintColor:Color.TColor,
  swipeEdgeWidth: 100,
  // drawerType: 'slide',
};
const tabScreenOptions = ({navigation}:any)=> {
  return {
    tabBarActiveTintColor: Color.BtnColor,
    tabBarInactiveTintColor:Color.TColor,
    headerRight: () => (
      <Pressable onPress={() => navigation.navigate('Notification')}>
        <Image
          source={require('../assets/icons/notification.png')}
          alt="Notification"
          size={6}
        />
      </Pressable>
    ),
    headerLeft: () => (
      <Pressable
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Image
          size={10}
          borderRadius={100}
          source={{
            uri: 'https://www.w3schools.com/css/img_lights.jpg',
          }}
          alt="Alternate Text"
        />
      </Pressable>
    ),
  };
};


export default AppNavigator;

