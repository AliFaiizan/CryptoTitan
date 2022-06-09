import React from 'react';
import { NativeBaseProvider,extendTheme } from "native-base";
import AppNavigator from "./navigation/AppNavigator";
import { LinearGradient } from 'expo-linear-gradient';

const config = {
  colors: {
    // Add new color
    primary: {
      900: "#212931",
    },
    // Redefinig only one shade, rest of the color will remain same.
    amber: {
      400: "#d97706",
    },
  },
  useSystemColorMode: false,
  initialColorMode: "dark",

};

const customTheme = extendTheme({ config });

const nBConfig = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme} config={nBConfig}>
      <AppNavigator />
    </NativeBaseProvider>
  );
}
