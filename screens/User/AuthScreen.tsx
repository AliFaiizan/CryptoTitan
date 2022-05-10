import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';


const AuthScreen = () => {
  return (
    <LinearGradient
      colors={["#212931", "#31453e"]}
      style={styles.gradient}
      start={{ x: 0.5, y: 0.8 }}
      end={{ x: 0.5, y: 1 }}
    >
      <View>
        <Text>AuthScreen</Text>
      </View>
    </LinearGradient>
  );
}

export default AuthScreen

export const ScreenOptions=()=>{
    return {
      headerTitle:'',
      headerTitleStyle: {
        fontSize:26,
        fontWeight: "bold",
      },
    };
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});