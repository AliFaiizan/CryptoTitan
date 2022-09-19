import React from "react";

import { Platform } from "react-native";

//Version 5 migraiton

//import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import CustomDrawer from "../components/shop/CustomDrawer";
import { useSelector } from "react-redux";


import AuthScreen,{ ScreenOptions as AuthOptions}  from "../screens/User/AuthScreen"; 
import { Color } from "../constants/Colors";



//Stack Creation

const productsStack = createNativeStackNavigator();
//const orderStack = createNativeStackNavigator();
//const shopDrawer = createDrawerNavigator();
const authStack= createNativeStackNavigator();


const AuthNavigator=() => {
  return (
    <authStack.Navigator screenOptions={defaultNavigationOption}>
      <authStack.Screen name="Auth" component={AuthScreen} options={AuthOptions} />
    </authStack.Navigator>
  );
}



// const ProductsNavigator = () => {
//   // this returns full produt navigator
//   return (
//     <productsStack.Navigator screenOptions={defaultNavigationOption}>
//       <productsStack.Screen
//         name="Product"
//         component={ProductsOverview}
//         options={productOverviewOptions}
//       />

//       <productsStack.Screen
//         name="Details"
//         component={ProductDetailScreen}
//         options={productDetailOptions}
//       />
//       <productsStack.Screen
//         name="Cart"
//         component={CartScreen}
//         options={CartOptions}
//       />
//     </productsStack.Navigator>
//   );
// };



const AppNavigator = (props: any) => {

  // const  isAuth= useSelector((state:any)=>!!state.auth.token)
  // const didTryAL=useSelector((state:any) => { return state.auth.didTryAL }) 

  return (
    <NavigationContainer>
      <AuthNavigator />
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

