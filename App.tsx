/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NativeBaseProvider, extendTheme, Input} from 'native-base';
import AppNavigator from './navigation/AppNavigator';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';

//reducers
import dashboardReducer from './store/reducer/dashboard.reducer';
import signalsReducer from './store/reducer/signals.reducer';
import { SheetProvider } from 'react-native-actions-sheet';


const rootReducer = combineReducers({
  dashboard:dashboardReducer,
  signal:signalsReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const themeconfig = {
  components: {
    Button: {
      // Can simply pass default props to change default behaviour of components.
      baseStyle: {
        rounded: 'md',
        shadow: 3,
      },
      defaultProps: {
        borderRadius: 50,
      },
      variants: {
        rounded: () => {
          return {
            rounded: 'full',
          };
        },
      },
    },
    Input: {
      baseStyle: {
        backgroundColor: 'white',
      },
      defaultProps: {
        shadow: 3,
        variant: 'rounded',
      },
    },
  },
  colors: {
    // Add new color
    primary: {
      100: 'white',
    },
    // Redefinig only one shade, rest of the color will remain same.
    accent: {
      200: 'light.200',
      900: '#161C22',
    },
  },
  useSystemColorMode: false,
  initialColorMode: 'light',
};

const customTheme = extendTheme(themeconfig);

// const nBConfig = {
//   dependencies: {
//     'linear-gradient': LinearGradient,
//   },
// };

export default function App() {

  return (
    <Provider store={store}>
    <NativeBaseProvider theme={customTheme}>
      <SheetProvider>
        <AppNavigator />
      </SheetProvider>
    </NativeBaseProvider>
    </Provider>
  );
}
