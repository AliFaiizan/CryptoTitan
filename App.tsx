import React ,{useState} from 'react';
import { NativeBaseProvider,extendTheme, Input } from "native-base";
import AppNavigator from "./navigation/AppNavigator";
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { Color } from './constants/Colors';

const rootReducer = combineReducers({
});

//const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const themeconfig = {
  components: {
    Button: {
      // Can simply pass default props to change default behaviour of components.
      baseStyle: {
        rounded: "md",
      },
      defaultProps: {
       borderRadius:50
      },
      variants: {
        rounded: () => {
          return {
            rounded: "full",
          };
        },
      },
    },
    Input: {
      baseStyle: {
        backgroundColor: "white",
      },
      defaultProps: {
        shadow: 3,
        variant:'rounded'
      },
    },
  },
  colors: {
    // Add new color
    primary: {
      100: "white",
    },
    // Redefinig only one shade, rest of the color will remain same.
    accent: {
      200: "light.200",
      900: "#161C22",
    },
  },
  useSystemColorMode: false,
  initialColorMode: "light",
};

const customTheme = extendTheme( themeconfig );

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

      <NativeBaseProvider theme={customTheme} >
        <AppNavigator />
      </NativeBaseProvider>

  );
}
