import React ,{useState} from 'react';
import { NativeBaseProvider,extendTheme } from "native-base";
import AppNavigator from "./navigation/AppNavigator";
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const themeconfig = {
  colors: {
    // Add new color
    primary: {
      900: "#212931",
    },
    // Redefinig only one shade, rest of the color will remain same.
    accent: {
      700:'#1B232A',
      900:"#161C22",
    },
  },
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const customTheme = extendTheme({ themeconfig });

const nBConfig = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

export default function App() {

   const [fontloaded, setFontloaded] = useState(false);

   //fetch fonts to use in styleSheet
   const fetchFont = () => {
     return Font.loadAsync({
       "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
       "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
     });
   };
   //if font is loaded the load the app

   if (!fontloaded) {
     return (
       <AppLoading
         startAsync={fetchFont}
         onFinish={() => {
           setFontloaded(true);
         }}
         onError={() => {
           setFontloaded(false);
         }}
       />
     );
   }
  return (
    <Provider store={store}>

      <NativeBaseProvider theme={customTheme} config={nBConfig}>
        <AppNavigator />
      </NativeBaseProvider>
    </Provider>
  );
}
