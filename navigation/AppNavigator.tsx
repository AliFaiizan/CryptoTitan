import React from "react";

import { Platform } from "react-native";
import { Color } from "../constants/Colors";

//Version 5 migraiton



//import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, Entypo } from "@expo/vector-icons";
//import CustomDrawer from "../components/shop/CustomDrawer";
import { useSelector } from "react-redux";


import AuthScreen,{ ScreenOptions as AuthOptions}  from "../screens/User/AuthScreen"; 



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



const ProductsNavigator = () => {
  // this returns full produt navigator
  return (
    <productsStack.Navigator screenOptions={defaultNavigationOption}>
      <productsStack.Screen
        name="Product"
        component={ProductsOverview}
        options={productOverviewOptions}
      />

      <productsStack.Screen
        name="Details"
        component={ProductDetailScreen}
        options={productDetailOptions}
      />
      <productsStack.Screen
        name="Cart"
        component={CartScreen}
        options={CartOptions}
      />
    </productsStack.Navigator>
  );
};

// const OrderNavigator = () => {
//   return (
//     <orderStack.Navigator screenOptions={defaultNavigationOption}>
//       <orderStack.Screen
//         name="Order"
//         component={OrderScreen}
//         options={OrderOptions}
//       />
//     </orderStack.Navigator>
//   );
// };

// const AdminNavigator = () => {
//   return (
//     <orderStack.Navigator screenOptions={defaultNavigationOption}>
//       <orderStack.Screen
//         name="Admin"
//         component={UserProductsScreen}
//         options={UserProductsOptions} 
//       />
//       <orderStack.Screen
//         name="EditProduct"
//         component={EditProductScreen}
//         options={EditProductsOptions} 
//       />
//     </orderStack.Navigator>
//   );
// };

// const ShopDrawerNavigator = () => {
//   return (
//     <shopDrawer.Navigator
//       drawerContent={(props) => {
//         return <CustomDrawer {...props} />;
//       }}
//       screenOptions={drawerNavigationOption}
//     >
//       <shopDrawer.Screen
//         name="Products"
//         component={ProductsNavigator}
//         options={{
//           headerShown: false,
//           drawerIcon: (props) => {
//             return <Ionicons size={23} name="home" color={props.color} />;
//           },
//         }}
//       />
//       <shopDrawer.Screen
//         name="Orders"
//         component={OrderNavigator}
//         options={{
//           headerShown: false,
//           drawerIcon: (props) => {
//             return <Entypo size={24} name="shopping-bag" color={props.color} />;
//           },
//         }}
//       />
//       <shopDrawer.Screen
//         name="My Products"
//         component={AdminNavigator}
//         options={{
//           headerShown: false,
//           drawerIcon: (props) => {
//             return <Ionicons size={24} name="create" color={props.color} />;
//           },
//         }}
//       />
//     </shopDrawer.Navigator>
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
    backgroundColor: Platform.OS === "android" ? "#212931" : "#fff",
  },
  headerTintColor: Platform.OS === "android" ? "#A7AFB7" : "",
};

// const drawerNavigationOption = {
//   ...defaultNavigationOption,
//   drawerStyle: {
//     backgroundColor: Color.skin,
//     width: 300,
//   },
//   drawerLabelStyle:{   
//     marginLeft:-25
//   },
//   drawerActiveBackgroundColor:Color.Primary,
  
// };
export default AppNavigator;

